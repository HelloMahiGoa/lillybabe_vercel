# Admin Panel Development Plan - PDF Profile Management System

## 🎯 **Project Overview**
Create a comprehensive admin panel for LillyBabe that allows uploading PDF profiles and automatically extracts images and data to display in the profiles section.

## 📋 **System Architecture**

### **Frontend (Admin Panel)**
- **Framework**: Next.js 15 with App Router
- **UI Library**: Tailwind CSS + Shadcn/ui components
- **State Management**: React Hook Form + Zustand
- **File Upload**: React Dropzone
- **PDF Processing**: PDF.js for client-side preview

### **Backend (API Routes)**
- **Framework**: Next.js API Routes
- **PDF Processing**: pdf-parse + sharp
- **Image Processing**: Sharp for optimization
- **Database**: Supabase (PostgreSQL)
- **File Storage**: Supabase Storage
- **Authentication**: Supabase Auth

### **PDF Processing Pipeline**
- **Upload** → **Extract Images** → **OCR Text** → **Data Parsing** → **Database Storage** → **Profile Display**

## 🏗️ **Database Schema**

### **Profiles Table**
```sql
CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  location VARCHAR(100) NOT NULL,
  nationality VARCHAR(50),
  height VARCHAR(20),
  body_type VARCHAR(50),
  hair_color VARCHAR(30),
  eye_color VARCHAR(30),
  languages TEXT[],
  services TEXT[],
  pricing JSONB NOT NULL,
  availability VARCHAR(50),
  response_rate INTEGER,
  rating DECIMAL(3,2) DEFAULT 0,
  is_verified BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### **Profile Images Table**
```sql
CREATE TABLE profile_images (
  id SERIAL PRIMARY KEY,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  image_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **PDF Uploads Table**
```sql
CREATE TABLE pdf_uploads (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size INTEGER NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  extracted_data JSONB,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  processed_at TIMESTAMP
);
```

## 🎨 **Admin Panel UI Components**

### **1. Dashboard Layout**
```
┌─────────────────────────────────────────────────────────┐
│ Header: Logo, User Menu, Notifications                  │
├─────────────────────────────────────────────────────────┤
│ Sidebar: Navigation Menu                                │
├─────────────────────────────────────────────────────────┤
│ Main Content Area                                       │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────┐ │
│ │ Upload Section  │ │ Profile List    │ │ Analytics   │ │
│ │                 │ │                 │ │             │ │
│ └─────────────────┘ └─────────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### **2. PDF Upload Interface**
- **Drag & Drop Zone** for PDF files
- **File Validation** (size, format, content)
- **Upload Progress** indicator
- **Batch Upload** support
- **Preview** extracted images
- **Manual Data Entry** fallback

### **3. Profile Management**
- **Grid/List View** toggle
- **Search & Filter** functionality
- **Bulk Actions** (delete, activate, feature)
- **Quick Edit** modal
- **Image Management** (reorder, delete, set primary)

## 🔧 **Technical Implementation Plan**

### **Phase 1: Foundation Setup**
1. **Admin Authentication System**
   - Supabase Auth integration
   - Role-based access control
   - Protected admin routes

2. **Database Setup**
   - Create tables in Supabase
   - Set up Row Level Security (RLS)
   - Configure storage buckets

3. **Basic Admin Layout**
   - Responsive sidebar navigation
   - Header with user menu
   - Main content area

### **Phase 2: PDF Upload System**
1. **File Upload Component**
   ```typescript
   // components/admin/pdf-upload.tsx
   interface PDFUploadProps {
     onUpload: (file: File) => Promise<void>;
     onExtract: (pdfData: PDFData) => Promise<void>;
   }
   ```

2. **PDF Processing Service**
   ```typescript
   // lib/pdf-processor.ts
   class PDFProcessor {
     async extractImages(pdfBuffer: Buffer): Promise<ImageData[]>
     async extractText(pdfBuffer: Buffer): Promise<string>
     async parseProfileData(text: string): Promise<ProfileData>
   }
   ```

3. **Image Processing Pipeline**
   ```typescript
   // lib/image-processor.ts
   class ImageProcessor {
     async optimizeImage(imageBuffer: Buffer): Promise<Buffer>
     async generateThumbnails(imageBuffer: Buffer): Promise<ThumbnailSet>
     async uploadToStorage(imageBuffer: Buffer, filename: string): Promise<string>
   }
   ```

### **Phase 3: Profile Management**
1. **Profile CRUD Operations**
   - Create, Read, Update, Delete profiles
   - Image management
   - Bulk operations

2. **Data Validation**
   - Form validation with React Hook Form
   - Image validation (size, format, dimensions)
   - Business logic validation

3. **Search & Filter System**
   - Real-time search
   - Advanced filters (location, age, services)
   - Sort options

### **Phase 4: Advanced Features**
1. **OCR Integration**
   - Text extraction from images
   - Data parsing from extracted text
   - Manual correction interface

2. **Batch Processing**
   - Multiple PDF upload
   - Queue management
   - Progress tracking

3. **Analytics Dashboard**
   - Upload statistics
   - Profile performance metrics
   - System health monitoring

## 📁 **File Structure**

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── profiles/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── upload/
│   │   │       └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── analytics/
│   │       └── page.tsx
│   └── api/
│       ├── admin/
│       │   ├── auth/
│       │   │   └── route.ts
│       │   ├── profiles/
│       │   │   ├── route.ts
│       │   │   ├── [id]/
│       │   │   │   └── route.ts
│       │   │   └── upload/
│       │   │       └── route.ts
│       │   └── pdf/
│       │       └── process/
│       │           └── route.ts
├── components/
│   ├── admin/
│   │   ├── layout/
│   │   │   ├── sidebar.tsx
│   │   │   ├── header.tsx
│   │   │   └── layout.tsx
│   │   ├── profiles/
│   │   │   ├── profile-form.tsx
│   │   │   ├── profile-list.tsx
│   │   │   ├── profile-card.tsx
│   │   │   └── image-manager.tsx
│   │   ├── upload/
│   │   │   ├── pdf-upload.tsx
│   │   │   ├── upload-progress.tsx
│   │   │   └── data-preview.tsx
│   │   └── dashboard/
│   │       ├── stats-cards.tsx
│   │       ├── recent-uploads.tsx
│   │       └── analytics-chart.tsx
│   └── ui/
│       ├── data-table.tsx
│       ├── file-upload.tsx
│       └── progress-bar.tsx
├── lib/
│   ├── admin/
│   │   ├── auth.ts
│   │   ├── pdf-processor.ts
│   │   ├── image-processor.ts
│   │   └── profile-manager.ts
│   ├── supabase/
│   │   ├── admin.ts
│   │   └── storage.ts
│   └── utils/
│       ├── validation.ts
│       └── helpers.ts
└── types/
    ├── admin.ts
    ├── profile.ts
    └── pdf.ts
```

## 🔐 **Security Considerations**

### **Authentication & Authorization**
- **Supabase Auth** with role-based access
- **JWT tokens** for API authentication
- **Admin-only routes** protection
- **Session management**

### **File Upload Security**
- **File type validation** (PDF only)
- **File size limits** (max 10MB)
- **Virus scanning** integration
- **Secure file storage** with signed URLs

### **Data Protection**
- **Row Level Security** in Supabase
- **Input sanitization** and validation
- **SQL injection** prevention
- **XSS protection**

## 📊 **PDF Processing Workflow**

### **1. Upload Process**
```
User Uploads PDF → File Validation → Store in Supabase Storage → 
Queue for Processing → Extract Images → OCR Text → Parse Data → 
Create Profile → Store Images → Update Status
```

### **2. Image Extraction Process**
```typescript
async function extractImagesFromPDF(pdfBuffer: Buffer) {
  // 1. Load PDF with pdf-parse
  const pdf = await pdfParse(pdfBuffer);
  
  // 2. Extract pages as images
  const pages = await convertPDFToImages(pdf);
  
  // 3. Process each image
  for (const page of pages) {
    // Optimize image
    const optimized = await sharp(page)
      .resize(800, 1200, { fit: 'inside' })
      .jpeg({ quality: 85 })
      .toBuffer();
    
    // Upload to storage
    const url = await uploadToStorage(optimized);
    
    // Store in database
    await saveImageRecord(url);
  }
}
```

### **3. Data Parsing Process**
```typescript
async function parseProfileData(extractedText: string) {
  // 1. Use regex patterns to extract data
  const patterns = {
    name: /Name:\s*([^\n]+)/i,
    age: /Age:\s*(\d+)/i,
    location: /Location:\s*([^\n]+)/i,
    // ... more patterns
  };
  
  // 2. Extract structured data
  const profileData = {};
  for (const [key, pattern] of Object.entries(patterns)) {
    const match = extractedText.match(pattern);
    if (match) profileData[key] = match[1].trim();
  }
  
  // 3. Validate and clean data
  return validateProfileData(profileData);
}
```

## 🎯 **User Experience Features**

### **1. Upload Experience**
- **Drag & Drop** interface with visual feedback
- **Progress indicators** for each processing step
- **Preview** of extracted images before confirmation
- **Error handling** with helpful messages
- **Batch upload** with queue management

### **2. Profile Management**
- **Real-time search** and filtering
- **Bulk operations** for efficiency
- **Quick edit** modals for fast updates
- **Image reordering** with drag & drop
- **Duplicate detection** and merging

### **3. Data Quality**
- **Auto-suggestions** for common fields
- **Validation feedback** in real-time
- **Data cleaning** tools
- **Import/Export** functionality

## 📈 **Performance Optimization**

### **1. Image Processing**
- **WebP format** for better compression
- **Multiple sizes** (thumbnail, medium, large)
- **Lazy loading** for image galleries
- **CDN integration** for fast delivery

### **2. Database Optimization**
- **Indexed queries** for fast search
- **Pagination** for large datasets
- **Caching** for frequently accessed data
- **Connection pooling** for better performance

### **3. Frontend Optimization**
- **Virtual scrolling** for large lists
- **Debounced search** to reduce API calls
- **Optimistic updates** for better UX
- **Service workers** for offline capability

## 🚀 **Deployment Strategy**

### **1. Development Environment**
- **Local Supabase** setup
- **Hot reload** for development
- **Mock data** for testing
- **Error logging** and debugging

### **2. Production Environment**
- **Vercel** deployment
- **Supabase** production database
- **Environment variables** management
- **Monitoring** and analytics

### **3. CI/CD Pipeline**
- **GitHub Actions** for automation
- **Automated testing** before deployment
- **Database migrations** management
- **Rollback** procedures

## 📋 **Implementation Timeline**

### **Week 1-2: Foundation**
- [ ] Set up admin authentication
- [ ] Create database schema
- [ ] Build basic admin layout
- [ ] Implement file upload component

### **Week 3-4: PDF Processing**
- [ ] Integrate PDF parsing library
- [ ] Build image extraction pipeline
- [ ] Implement OCR functionality
- [ ] Create data parsing logic

### **Week 5-6: Profile Management**
- [ ] Build CRUD operations
- [ ] Implement search and filters
- [ ] Create image management system
- [ ] Add bulk operations

### **Week 7-8: Polish & Deploy**
- [ ] Add analytics dashboard
- [ ] Implement error handling
- [ ] Performance optimization
- [ ] Production deployment

## 🎯 **Success Metrics**

### **Technical Metrics**
- **Upload Success Rate**: >95%
- **Processing Time**: <30 seconds per PDF
- **Image Quality**: Maintained after optimization
- **System Uptime**: >99.9%

### **User Experience Metrics**
- **Time to Upload**: <2 minutes per profile
- **Data Accuracy**: >90% auto-extraction rate
- **User Satisfaction**: >4.5/5 rating
- **Error Rate**: <5%

This comprehensive plan provides a solid foundation for building a robust admin panel with PDF upload and auto-extraction capabilities. The system will be scalable, secure, and user-friendly while maintaining high performance standards.
