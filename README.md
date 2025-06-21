# Matthew Holden's Portfolio

This portfolio website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, enhanced with modern animations and interactive elements.

## 🚀 Enhanced Features

### Landing Page Enhancements
- **Interactive Hero Section**: Dynamic role rotation with icons and smooth animations
- **Particle Background**: Floating particles for visual appeal
- **Mouse-Interactive Elements**: Floating elements that respond to mouse movement
- **Animated Code Snippet**: Live code preview with syntax highlighting
- **Statistics Counter**: Display of experience metrics
- **Enhanced Button Animations**: Hover effects and micro-interactions
- **Scroll-to-Top Button**: Smooth scrolling with fade-in/out animations

### Technical Improvements
- **Framer Motion Integration**: Advanced animations and transitions
- **Intersection Observer**: Scroll-triggered animations for better performance
- **Enhanced SEO**: Improved meta tags and descriptions
- **Accessibility Features**: Focus states and reduced motion support
- **Responsive Design**: Mobile-first approach with enhanced breakpoints
- **Performance Optimizations**: Optimized animations and efficient rendering

### Design Elements
- **Modern Gradient Backgrounds**: Dynamic color schemes
- **Interactive UI Components**: Hover states and micro-interactions
- **Typography Enhancements**: Improved readability and visual hierarchy
- **Color Themes**: Support for light and dark themes
- **Professional Layout**: Clean, modern design with attention to detail

## 🛠 Installation

This project uses `pnpm` as the package manager for better performance and efficiency.

```bash
pnpm install
```

## 🧑‍💻 Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

To start on a specific port:
```bash
PORT=3001 pnpm start
```

## 🏗 Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 📦 Dependencies

### Core Dependencies
- **@docusaurus/core**: Static site generator
- **@docusaurus/preset-classic**: Classic theme and plugins
- **React**: UI library
- **framer-motion**: Animation library
- **react-intersection-observer**: Scroll-triggered animations
- **clsx**: Utility for conditional CSS classes

### Development Dependencies
- **TypeScript**: Type checking
- **@docusaurus/types**: TypeScript definitions

## 🎨 Customization

### Colors and Themes
The color scheme is defined in `src/css/custom.css` with CSS custom properties:
- Primary: `#22a7f0` (Brand Blue)
- Secondary gradients and accent colors
- Dark theme support

### Animations
Animations are handled through:
- Framer Motion for complex interactions
- CSS animations for lightweight effects
- Intersection Observer for scroll-triggered animations

### Components Structure
```
src/
├── components/
│   ├── EnhancedAnimations/    # Reusable animation components
│   ├── ScrollToTop/           # Scroll-to-top functionality
│   ├── HomepageFeatures/      # Feature showcase
│   ├── Skills/                # Skills section
│   ├── ProjectsPreview/       # Projects preview
│   └── ContactCTA/            # Contact call-to-action
├── pages/
│   └── index.tsx              # Enhanced landing page
└── css/
    └── custom.css             # Global styles and theme
```

## 🚀 Deployment

### Using SSH:
```bash
USE_SSH=true pnpm deploy
```

### Using HTTPS:
```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 📱 Browser Support

This portfolio is optimized for modern browsers with support for:
- CSS Grid and Flexbox
- CSS Custom Properties
- Modern JavaScript features
- Intersection Observer API
- Smooth scrolling

## ♿ Accessibility

The portfolio includes accessibility features:
- Focus indicators for keyboard navigation
- Reduced motion support for users with vestibular disorders
- Semantic HTML structure
- Proper ARIA labels where needed
- High contrast ratios for text readability

## 🔧 Performance

Performance optimizations include:
- Lazy loading for images
- Efficient animation implementations
- Optimized bundle sizes
- Modern build tools and compression

---

**Built with ❤️ by Matthew Holden**
- Portfolio: [matthewholden.dev](https://matthewholden.dev)
- GitHub: [@heisenbergoss](https://github.com/heisenbergoss)
