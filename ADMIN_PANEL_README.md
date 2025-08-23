# LillyBabe Admin Panel

A comprehensive admin panel for managing escort profiles with PDF upload and auto-extraction capabilities.

## 🚀 Features

### **PDF Processing Pipeline**
- **Drag & Drop Upload**: Intuitive file upload interface
- **Auto Image Extraction**: Extract images from PDF pages
- **OCR Text Extraction**: Extract text content using OCR
- **Data Parsing**: Automatically parse profile information
- **Image Optimization**: Optimize and resize extracted images
- **Batch Processing**: Handle multiple PDF uploads

### **Profile Management**
- **CRUD Operations**: Create, Read, Update, Delete profiles
- **Image Management**: Upload, reorder, and manage profile images
- **Search & Filter**: Advanced search and filtering capabilities
- **Bulk Operations**: Perform actions on multiple profiles
- **Data Validation**: Real-time validation and error handling

### **Admin Dashboard**
- **Analytics**: Upload statistics and performance metrics
- **Recent Activity**: Track recent uploads and processing status
- **User Management**: Admin user authentication and authorization
- **System Monitoring**: Monitor system health and performance

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage
- **PDF Processing**: pdf-parse, sharp
- **File Upload**: react-dropzone

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account and project
- Git

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone <repository-url>
cd lillybabe-website

# Run the setup script
node scripts/setup-admin-panel.js
```

### 2. Environment Configuration

Update `.env.local` with your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Admin Panel Configuration
ADMIN_EMAIL=admin@lillybabe.com
ADMIN_PASSWORD=luQman786!@#$%

# File Upload Configuration
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=application/pdf
```

### 3. Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the contents of `database-schema.sql`
4. Set up storage buckets using `storage-setup.md`

### 4. Create Admin User

```sql
-- Insert admin user (replace with your actual user ID from Supabase Auth)
INSERT INTO admin_users (id, email, role)
VALUES (
  'your-user-id-from-supabase-auth',
  'admin@lillybabe.com',
  'admin'
);
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/admin/login` to access the admin panel.

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/                    # Admin panel routes
│   │   ├── layout.tsx           # Admin layout with auth
│   │   ├── page.tsx             # Dashboard
│   │   ├── login/               # Login page
│   │   └── profiles/            # Profile management
│   └── api/
│       └── admin/               # Admin API routes
├── components/
│   └── admin/                   # Admin components
│       ├── layout/              # Layout components
│       ├── dashboard/           # Dashboard components
│       ├── upload/              # Upload components
│       └── profiles/            # Profile components
├── lib/
│   └── admin/                   # Admin utilities
└── types/                       # TypeScript types
```

## 🔐 Authentication & Security

### **Role-Based Access Control**
- Admin users only can access the admin panel
- Row Level Security (RLS) policies protect data
- JWT token-based authentication
- Secure file upload validation

### **File Upload Security**
- File type validation (PDF only)
- File size limits (10MB max)
- Virus scanning integration ready
- Secure storage with signed URLs

## 📊 PDF Processing Workflow

```
1. Upload PDF → 2. Validate File → 3. Extract Images → 4. OCR Text → 
5. Parse Data → 6. Create Profile → 7. Store Images → 8. Update Status
```

### **Supported PDF Formats**
- Standard PDF files
- PDF with embedded images
- Multi-page PDFs
- Text-based PDFs

### **Extracted Data Fields**
- **Basic Info**: Name, Age, Location
- **Physical Attributes**: Height, Body Type, Hair Color, Eye Color
- **Services**: Available services and languages
- **Pricing**: 1 Shot, 2 Shots, 3 Shots, Full Night
- **Images**: Profile photos with optimization

## 🎨 User Interface

### **Dashboard Features**
- **Statistics Cards**: Key metrics at a glance
- **Analytics Chart**: Upload trends and performance
- **Recent Uploads**: Latest processing status
- **Quick Actions**: Fast access to common tasks

### **Upload Interface**
- **Drag & Drop**: Intuitive file upload
- **Progress Tracking**: Real-time upload progress
- **Status Indicators**: Visual feedback for each step
- **Error Handling**: Clear error messages and recovery

### **Profile Management**
- **Grid/List View**: Flexible display options
- **Search & Filter**: Advanced filtering capabilities
- **Bulk Operations**: Efficient batch processing
- **Image Gallery**: Visual image management

## 🔧 Configuration

### **Environment Variables**

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Required |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Required |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Required |
| `MAX_FILE_SIZE` | Maximum file size in bytes | 10485760 (10MB) |
| `ALLOWED_FILE_TYPES` | Allowed file types | application/pdf |

### **Database Configuration**

The admin panel requires the following tables:
- `admin_users` - Admin user management
- `profiles` - Profile data storage
- `profile_images` - Image management
- `pdf_uploads` - Upload tracking

### **Storage Configuration**

Required Supabase storage buckets:
- `admin-uploads` - PDF files and extracted images
- `profile-images` - Profile images for website display

## 🚀 Deployment

### **Vercel Deployment**

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Environment Variables for Production**

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 📈 Performance Optimization

### **Image Processing**
- Automatic image optimization
- Multiple size generation
- WebP format support
- Lazy loading implementation

### **Database Optimization**
- Indexed queries for fast search
- Pagination for large datasets
- Connection pooling
- Query optimization

### **Frontend Optimization**
- Code splitting
- Lazy loading
- Optimistic updates
- Service worker support

## 🔍 Troubleshooting

### **Common Issues**

1. **Authentication Errors**
   - Check Supabase credentials in `.env.local`
   - Verify admin user exists in `admin_users` table
   - Ensure RLS policies are correctly configured

2. **File Upload Issues**
   - Check file size limits
   - Verify file type restrictions
   - Ensure storage buckets are configured

3. **PDF Processing Errors**
   - Validate PDF file format
   - Check PDF file integrity
   - Verify OCR dependencies

### **Debug Mode**

Enable debug logging by setting:

```env
DEBUG=true
NODE_ENV=development
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software for LillyBabe.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the troubleshooting section

## 🔄 Updates

### **Version History**
- **v1.0.0** - Initial release with PDF processing
- **v1.1.0** - Added batch processing
- **v1.2.0** - Enhanced analytics dashboard

### **Upcoming Features**
- Advanced OCR with multiple language support
- AI-powered data extraction
- Real-time collaboration
- Mobile admin app
- Advanced analytics and reporting

---

**Built with ❤️ for LillyBabe**
