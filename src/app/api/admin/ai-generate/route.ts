import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/simple-auth';

interface GenerateContentRequest {
  type: 'seo' | 'profile_description';
  profileData: {
    name: string;
    age: number;
    location: string;
    category: string;
    pricing?: any;
  };
  contentType?: 'og_title' | 'og_description' | 'twitter_title' | 'twitter_description' | 'canonical_url' | 'schema_markup' | 'profile_description';
}

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if AI content generation is enabled
    const aiEnabled = process.env.AI_CONTENT_GENERATION_ENABLED === 'true';
    if (!aiEnabled) {
      return NextResponse.json(
        { error: 'AI content generation is not enabled' },
        { status: 403 }
      );
    }

    const body: GenerateContentRequest = await request.json();
    const { type, profileData, contentType } = body;

    if (!profileData.name || !profileData.location || !profileData.category) {
      return NextResponse.json(
        { error: 'Missing required profile data' },
        { status: 400 }
      );
    }

    let generatedContent = {};

    if (type === 'seo') {
      generatedContent = await generateSEOContent(profileData);
    } else if (type === 'profile_description') {
      const description = await generateProfileDescription(profileData);
      generatedContent = { profile_description: description };
    } else if (contentType) {
      const specificContent = await generateSpecificContent(profileData, contentType);
      generatedContent = { [contentType]: specificContent };
    }

    return NextResponse.json({
      success: true,
      content: generatedContent
    });

  } catch (error) {
    console.error('AI generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}

async function generateSEOContent(profileData: any) {
  const { name, age, location, category } = profileData;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const canonicalUrl = `${baseUrl}/escorts/${slug}`;
  
  // If OpenAI is available, use it for more natural SEO content
  const openaiKey = process.env.OPENAI_API_KEY;
  
  if (openaiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: process.env.AI_MODEL || 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `You are an SEO expert creating metadata for an escort profile page. 
              
IMPORTANT GUIDELINES:
1. Create natural-sounding, attractive SEO content
2. Avoid generic marketing language or clichés
3. Focus on personality and genuine qualities
4. Keep titles concise (under 60 characters)
5. Keep descriptions informative but brief (under 160 characters)
6. Include the name, age, category, and location in titles
7. Make descriptions conversational and engaging
8. For schema markup, focus on key attributes that highlight personality`
            },
            {
              role: 'user',
              content: `Create SEO metadata for ${name}, a ${age} year old ${category} in ${location}.

Please provide:
1. OG Title (for Facebook/social sharing)
2. OG Description (for Facebook/social sharing)
3. Twitter Title
4. Twitter Description
5. Schema Markup (JSON-LD format for a Person)

The canonical URL is: ${canonicalUrl}
Website name: Lillybabe
Keep titles under 60 characters and descriptions under 160 characters.
Make the content natural and appealing, focusing on personality rather than services.`
            }
          ],
          max_tokens: 800,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const aiData = await response.json();
        const content = aiData.choices[0]?.message?.content;
        
        if (content) {
          try {
            // Extract the different parts from the AI response
            let ogTitle = extractFromAIResponse(content, "OG Title", 60);
            let ogDescription = extractFromAIResponse(content, "OG Description", 160);
            let twitterTitle = extractFromAIResponse(content, "Twitter Title", 60);
            let twitterDescription = extractFromAIResponse(content, "Twitter Description", 160);
            let schemaMarkup = extractSchemaMarkup(content);
            
            // Fallback to default values if AI didn't provide good results
            if (!ogTitle) ogTitle = `Meet ${name} - ${age}y/o ${category} in ${location} | Lillybabe`;
            if (!ogDescription) ogDescription = `${name} is a ${age} year old ${category} based in ${location}. Available for bookings and social dates. Real photos, genuine personality.`;
            if (!twitterTitle) twitterTitle = `${name} from ${location} | ${category} | Lillybabe`;
            if (!twitterDescription) twitterDescription = `${name} - ${age}y/o ${category} in ${location}. Verified profile with real photos. Book your time together today!`;
            
            if (!schemaMarkup) {
              schemaMarkup = {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": name,
                "description": `${name} is a ${age} year old ${category} based in ${location}.`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": location,
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                },
                "url": canonicalUrl
              };
            }
            
            return {
              og_title: ogTitle,
              og_description: ogDescription,
              twitter_title: twitterTitle,
              twitter_description: twitterDescription,
              canonical_url: canonicalUrl,
              schema_markup: schemaMarkup
            };
          } catch (parseError) {
            console.error('Error parsing AI response for SEO content:', parseError);
          }
        }
      }
    } catch (error) {
      console.error('OpenAI API error for SEO content:', error);
    }
  }
  
  // Fallback to default values if AI fails
  return generateFallbackSEOContent(profileData);
}

function extractFromAIResponse(content: string, label: string, maxLength: number): string | null {
  const regex = new RegExp(`${label}[:\\s]+(.*?)(?=\\n|$)`, 'i');
  const match = content.match(regex);
  if (match && match[1]) {
    let extracted = match[1].trim();
    if (extracted.length > maxLength) {
      extracted = extracted.substring(0, maxLength - 3) + '...';
    }
    return extracted;
  }
  return null;
}

function extractSchemaMarkup(content: string): any {
  try {
    // Try to find JSON in the content
    const jsonRegex = /```json([\s\S]*?)```|```([\s\S]*?)```|\{[\s\S]*\}/;
    const match = content.match(jsonRegex);
    
    if (match) {
      let jsonStr = match[1] || match[2] || match[0];
      // Clean up the JSON string
      jsonStr = jsonStr.replace(/```json|```/g, '').trim();
      
      // Parse the JSON
      const schemaObj = JSON.parse(jsonStr);
      return schemaObj;
    }
  } catch (e) {
    console.error('Error extracting schema markup:', e);
  }
  return null;
}

function generateFallbackSEOContent(profileData: any) {
  const { name, age, location, category } = profileData;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const canonicalUrl = `${baseUrl}/escorts/${slug}`;
  
  // Generate more natural-sounding SEO content
  const personalityTraits = [
    "charming", "friendly", "outgoing", "warm", "vibrant", 
    "fun-loving", "adventurous", "caring", "attentive", "genuine"
  ];
  
  const randomTrait1 = personalityTraits[Math.floor(Math.random() * personalityTraits.length)];
  const randomTrait2 = personalityTraits[Math.floor(Math.random() * personalityTraits.length)];
  
  // More natural titles and descriptions
  const ogTitle = `Meet ${name} - ${age}y/o ${category} in ${location} | Lillybabe`;
  const ogDescription = `${name} is a ${randomTrait1} ${age} year old ${category} based in ${location}. Available for bookings and social dates. Real photos, genuine personality.`;
  
  const twitterTitle = `${name} from ${location} | ${category} | Lillybabe`;
  const twitterDescription = `${name} - ${randomTrait2} ${age}y/o ${category} in ${location}. Verified profile with real photos. Book your time together today!`;
  
  // Enhanced schema markup with more natural descriptions
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "alternateName": [`${name} ${category}`, `${category} in ${location}`],
    "description": `${name} is a ${age} year old ${category} based in ${location}. She's known for her ${randomTrait1} personality and genuine approach.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location,
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "telephone": "+918121426651",
    "url": canonicalUrl,
    "sameAs": [
      baseUrl
    ],
    "knowsAbout": [
      `${location} nightlife`,
      `${location} entertainment`,
      "Social companionship",
      "Dating etiquette"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": location
    },
    "offers": {
      "@type": "Service",
      "name": `${category} Companionship`,
      "description": `${name} offers professional companionship services in ${location}. Available for social events, dinner dates, and private meetings.`,
      "provider": {
        "@type": "Person",
        "name": name
      },
      "areaServed": {
        "@type": "Place",
        "name": location
      }
    }
  };

  return {
    og_title: ogTitle,
    og_description: ogDescription,
    twitter_title: twitterTitle,
    twitter_description: twitterDescription,
    canonical_url: canonicalUrl,
    schema_markup: schemaMarkup
  };
}

async function generateProfileDescription(profileData: any) {
  const { name, age, location, category, pricing } = profileData;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';
  
  // If OpenAI is available, use it for more natural content
  const openaiKey = process.env.OPENAI_API_KEY;
  
  // SEO focus keywords based on profile data
  const focusKeywords = [
    `${location} ${category}`,
    `${category} in ${location}`,
    `${name} ${location}`,
    `${age} year old ${category}`,
    `best ${category}`,
    `${category} services`,
    `${location} escorts`,
    `Chennai escorts`,
    `Chennai escorts service`,
    `independent ${category}`,
    `verified ${category}`,
    `genuine ${category}`
  ];
  
  if (openaiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: process.env.AI_MODEL || 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `You are a first-person writer creating a personal profile for ${name}, a ${age} year old ${category} in ${location} for the Lillybabe website. 

IMPORTANT GUIDELINES:
1. Write in FIRST PERSON as if ${name} herself is writing
2. Use a warm, friendly, and natural tone - avoid sounding like AI
3. Write as if a real person is talking about herself, with personality and character
4. Include 2-3 natural mentions of keywords that can be linked later
5. Naturally incorporate SEO focus keywords without keyword stuffing
6. Create 3-4 paragraphs (minimum 250 words total)
7. Include personal details like hobbies, interests, and personality traits
8. Avoid clichés and generic descriptions
9. Avoid AI-typical words like "discreet", "discover", "premium", "elegant", "delightful", "experience"
10. Use contractions (I'm, you're, we'll) and casual language
11. Include some specific details about ${location} to sound authentic

FOCUS KEYWORDS TO INCLUDE NATURALLY:
${focusKeywords.join(', ')}

The profile should read like a real person wrote it, not like marketing copy.`
            },
            {
              role: 'user',
              content: `Write a compelling, natural first-person profile description for ${name}, a ${age} year old ${category} in ${location}. 

Make it sound like ${name} wrote it herself - warm, authentic, and conversational. Include specific personality traits, interests, and hobbies that make her unique.

Naturally mention "Lillybabe" at least once, and include the terms "${category}" and "${location}" naturally in the text. Also include the term "Chennai escorts" somewhere in the text.

Write at least 250 words in 3-4 paragraphs. Include a friendly call-to-action at the end.`
            }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const aiData = await response.json();
        let content = aiData.choices[0]?.message?.content || await generateEnhancedFallbackDescription(profileData);
        
        // Process content to ensure internal links are properly formatted
        
        // Only add ONE internal link - either to Lillybabe or Chennai escorts
        let linkAdded = false;
        
        // First try to link "Lillybabe"
        const lillybabeRegex = /\bLillybabe\b(?![^<]*>)/gi;
        if (lillybabeRegex.test(content)) {
          content = content.replace(lillybabeRegex, `<a href="${baseUrl}" class="text-pink-500 hover:text-pink-600 underline"><strong>Lillybabe</strong></a>`);
          linkAdded = true;
        }
        
        // If Lillybabe wasn't found, try to link "Chennai escorts"
        if (!linkAdded) {
          const chennaiEscortsRegex = /\bChennai escorts\b(?![^<]*>)/gi;
          if (chennaiEscortsRegex.test(content)) {
            content = content.replace(chennaiEscortsRegex, `<a href="${baseUrl}" class="text-pink-500 hover:text-pink-600 underline"><strong>Chennai escorts</strong></a>`);
            linkAdded = true;
          }
        }
        
        // If neither was found, try to link "Chennai escorts service"
        if (!linkAdded) {
          const chennaiEscortsServiceRegex = /\bChennai escorts service\b(?![^<]*>)/gi;
          if (chennaiEscortsServiceRegex.test(content)) {
            content = content.replace(chennaiEscortsServiceRegex, `<a href="${baseUrl}" class="text-pink-500 hover:text-pink-600 underline"><strong>Chennai escorts service</strong></a>`);
            linkAdded = true;
          }
        }
        
        // If still no link, forcibly add one to the first mention of "escorts"
        if (!linkAdded) {
          const escortsRegex = /\bescorts\b(?![^<]*>)/i;
          content = content.replace(escortsRegex, `<a href="${baseUrl}" class="text-pink-500 hover:text-pink-600 underline"><strong>escorts</strong></a>`);
        }
        
        // Ensure content is properly formatted with paragraphs
        // We don't need to add <p> tags here since the page component will handle that
        // Just make sure paragraphs are separated by double newlines
        content = content.replace(/\n{3,}/g, '\n\n'); // Replace triple+ newlines with double
        
        return content;
      }
    } catch (error) {
      console.error('OpenAI API error:', error);
    }
  }
  
  return generateEnhancedFallbackDescription(profileData);
}


async function generateEnhancedFallbackDescription(profileData: any) {
  const { name, age, location, category } = profileData;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';
  
  // Create raw content first - focusing on Chennai areas only
  const descriptions = [
    `Hi there! I'm ${name}, a ${age} year old ${category} who calls ${location} home. I've been told I have a warm smile and an even warmer personality. I love meeting new people and creating genuine connections. When we meet, you'll find I'm down-to-earth and easy to talk to - no awkward silences, just good conversation and lots of laughs.`,
    
    `I'm passionate about life in Chennai and know all the best spots around town. On my days off, you'll find me checking out new cafés, going for walks in the park, or curling up with a good book. I'm equally happy getting dressed up for a fancy dinner or keeping it casual. If you're new to ${location}, I'd love to show you around some of my favorite places as one of the most friendly ${location} escorts.`,
    
    `As a ${category}, I pride myself on being authentic and real. I'm not into putting on an act - what you see is what you get with me. I believe the best moments happen when both people feel comfortable just being themselves. My friends describe me as thoughtful, funny, and a bit adventurous. I'm always up for trying new things and making memories.`,
    
    `If you think we'd click, I'd love to hear from you. Booking through Lillybabe is super simple - just reach out and we can arrange a time that works for both of us. I'm available most evenings and some afternoons, and I'm always punctual (a rare quality these days!). Looking forward to meeting you and creating some special moments together! If you're looking for Chennai escorts service, you've come to the right place.`
  ];
  
  let content = descriptions.join('\n\n');
  
  // Add ONE internal link - either to Lillybabe or Chennai escorts
  let linkAdded = false;
  
  // First try to link "Lillybabe"
  const lillybabeRegex = /\bLillybabe\b(?![^<]*>)/gi;
  if (lillybabeRegex.test(content)) {
    content = content.replace(lillybabeRegex, `<a href="${baseUrl}" class="text-pink-500 hover:text-pink-600 underline"><strong>Lillybabe</strong></a>`);
    linkAdded = true;
  }
  
  // If Lillybabe wasn't found, try to link "Chennai escorts"
  if (!linkAdded) {
    const chennaiEscortsRegex = /\bChennai escorts\b(?![^<]*>)/gi;
    if (chennaiEscortsRegex.test(content)) {
      content = content.replace(chennaiEscortsRegex, `<a href="${baseUrl}" class="text-pink-500 hover:text-pink-600 underline"><strong>Chennai escorts</strong></a>`);
      linkAdded = true;
    }
  }
  
  // If neither was found, try to link "Chennai escorts service"
  if (!linkAdded) {
    const chennaiEscortsServiceRegex = /\bChennai escorts service\b(?![^<]*>)/gi;
    if (chennaiEscortsServiceRegex.test(content)) {
      content = content.replace(chennaiEscortsServiceRegex, `<a href="${baseUrl}" class="text-pink-500 hover:text-pink-600 underline"><strong>Chennai escorts service</strong></a>`);
      linkAdded = true;
    }
  }
  
  // If still no link, forcibly add one to the first mention of "escorts"
  if (!linkAdded) {
    const escortsRegex = /\bescorts\b(?![^<]*>)/i;
    content = content.replace(escortsRegex, `<a href="${baseUrl}" class="text-pink-500 hover:text-pink-600 underline"><strong>escorts</strong></a>`);
  }
  
  // Ensure content is properly formatted with paragraphs
  content = content.replace(/\n{3,}/g, '\n\n'); // Replace triple+ newlines with double
  
  return content;
}

async function generateSpecificContent(profileData: any, contentType: string) {
  const { name, age, location, category } = profileData;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Generate more natural-sounding content
  const personalityTraits = [
    "charming", "friendly", "outgoing", "warm", "vibrant", 
    "fun-loving", "adventurous", "caring", "attentive", "genuine"
  ];
  
  const randomTrait = personalityTraits[Math.floor(Math.random() * personalityTraits.length)];

  switch (contentType) {
    case 'og_title':
      return `${name} | ${age}y/o ${category} in ${location} | Lillybabe`;
    
    case 'og_description':
      return `Meet ${name}, a ${randomTrait} ${age} year old ${category} based in ${location}. Available for dates and social events. Verified profile with real photos.`;
    
    case 'twitter_title':
      return `${name} from ${location} | ${category} | Lillybabe`;
    
    case 'twitter_description':
      return `${name} - ${randomTrait} ${age}y/o ${category} in ${location}. Book your time together today!`;
    
    case 'canonical_url':
      return `${baseUrl}/escorts/${slug}`;
    
    case 'schema_markup':
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "description": `${name} is a ${age} year old ${category} based in ${location}. She's known for her ${randomTrait} personality and genuine approach.`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location,
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "knowsAbout": [
          `${location} nightlife`,
          `${location} entertainment`,
          "Social companionship",
          "Dating etiquette"
        ],
        "url": `${baseUrl}/escorts/${slug}`
      };
    
    default:
      return '';
  }
}
