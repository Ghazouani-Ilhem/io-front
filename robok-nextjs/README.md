# Robok - AI Agency & Technology (Next.js)

A modern, responsive AI agency website built with Next.js 15, TypeScript, and Tailwind CSS. This project is a complete conversion of the original HTML template to a modern React-based application.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Built-in SEO optimization with Next.js
- **Interactive Components**: Swiper carousels, animations, and interactive elements
- **Type Safety**: Full TypeScript support for better development experience

## 📁 Project Structure

```
robok-nextjs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about-us/          # About page
│   │   ├── contact-us/        # Contact page
│   │   ├── services/          # Services page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Preloader.tsx      # Loading animation
│   │   ├── Scripts.tsx        # JavaScript libraries
│   │   ├── Banner.tsx         # Hero banner
│   │   ├── About.tsx          # About section
│   │   ├── Services.tsx       # Services section
│   │   ├── Process.tsx        # Process section
│   │   ├── Projects.tsx       # Projects section
│   │   ├── Team.tsx           # Team section
│   │   ├── Testimonial.tsx    # Testimonials
│   │   ├── FAQ.tsx            # FAQ section
│   │   └── Blog.tsx           # Blog section
│   └── types/                 # TypeScript definitions
│       └── global.d.ts        # Global type definitions
├── public/
│   └── assets/               # Static assets
│       ├── css/              # Stylesheets
│       ├── js/               # JavaScript libraries
│       ├── img/              # Images
│       └── fonts/            # Font files
└── package.json
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Original CSS
- **UI Libraries**: Swiper, Framer Motion
- **Icons**: Font Awesome
- **Build Tool**: Next.js built-in bundler

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd robok-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

- **Homepage** (`/`) - Main landing page with all sections
- **About Us** (`/about-us`) - Company information and team
- **Services** (`/services`) - AI services offered
- **Contact** (`/contact-us`) - Contact form and information
- **404** (`/not-found`) - Custom error page

## 🎨 Components

### Layout Components
- `Header` - Navigation with mobile menu and side menu
- `Footer` - Site footer with links and contact info
- `Preloader` - Loading animation
- `Scripts` - JavaScript library loader

### Page Sections
- `Banner` - Hero section with carousel
- `About` - About section with company info
- `Services` - Services grid with icons
- `Process` - How it works section
- `Projects` - Featured projects
- `Team` - Team members
- `Testimonial` - Customer testimonials
- `FAQ` - Frequently asked questions
- `Blog` - Latest blog posts

## 🔧 Customization

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. The route will be automatically available

### Modifying Styles

- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes or modify the original CSS files in `public/assets/css/`

### Adding New Components

1. Create a new `.tsx` file in `src/components/`
2. Export as default
3. Import and use in pages

## 📦 Dependencies

### Core Dependencies
- `next` - React framework
- `react` - UI library
- `react-dom` - DOM rendering
- `typescript` - Type safety

### UI Dependencies
- `swiper` - Carousel/slider
- `framer-motion` - Animations
- `react-icons` - Icon library

### Development Dependencies
- `@types/node` - Node.js types
- `@types/react` - React types
- `@types/react-dom` - React DOM types
- `eslint` - Code linting
- `tailwindcss` - CSS framework

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Caching**: Built-in Next.js caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email info@robok.com or create an issue in the repository.

---

**Original Template**: Robok - AI Agency & Technology HTML Template
**Converted to**: Next.js 15 with TypeScript and Tailwind CSS