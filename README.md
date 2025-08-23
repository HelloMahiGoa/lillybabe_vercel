# LillyBabe - Chennai Escorts Service

A modern, responsive website for LillyBabe Chennai Escorts Service built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Beautiful, responsive design with gradient themes
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 📱 **Mobile First**: Fully responsive design for all devices
- 🔍 **SEO Optimized**: Built-in SEO features and meta tags
- 🎯 **TypeScript**: Full type safety throughout the application
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid development
- 📊 **Supabase Integration**: Database and authentication ready
- 🖼️ **Image Optimization**: Next.js Image component for optimal loading

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lillybabe-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
lillybabe-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   ├── home/             # Homepage components
│   │   ├── profiles/         # Profile components
│   │   └── ui/               # Reusable UI components
│   └── lib/                  # Utility functions
│       ├── supabase.ts       # Supabase configuration
│       └── utils.ts          # Helper functions
├── public/
│   ├── data/                 # Static JSON data
│   └── images/               # Static images
└── package.json
```

## Database Schema

The application uses Supabase with the following main tables:

- **profiles**: Escort profiles with details
- **profile_photos**: Profile images
- **service_areas**: Service area information
- **testimonials**: Customer reviews
- **faqs**: Frequently asked questions

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component file in appropriate directory
2. Export component with proper TypeScript types
3. Import and use in pages

### Styling

- Use Tailwind CSS classes for styling
- Custom CSS in `globals.css` for complex animations
- Component-specific styles in component files

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `NEXT_PUBLIC_SITE_URL` | Site URL for API calls | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software. All rights reserved.

## Support

For support and questions, please contact the development team.

---

**Note**: This is a development version. For production deployment, ensure all environment variables are properly configured and the database is set up with the required schema.
