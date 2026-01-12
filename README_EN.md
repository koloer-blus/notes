# Personal Website Template

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

<p align="center">
  <a href="./README.md">中文</a> | <a href="./README_EN.md">English</a>
</p>

A modern personal website template built with React + Vite + shadcn/ui. Ready to use out of the box with highly customizable configuration.

## ✨ Features

### 🏠 Homepage
- **Pixel-style Typewriter Animation** - Powered by typed.js, customizable text
- **Scroll-driven Animations** - Framer Motion + GSAP ScrollTrigger parallax effects
- **Skill Cards** - Hover effects with gradient backgrounds
- **Project Showcase** - Image zoom, tag animations
- **CTA Section** - Floating orb animations

### 📝 Blog System
- **GitHub Issues as CMS** - No database needed, manage posts directly via GitHub Issues
- **Tag Filtering** - Filter posts by tags
- **Search** - Search post titles and content with keyword highlighting
- **Pagination** - Auto pagination with URL parameter sync
- **Full Markdown Rendering**:
  - Shiki code highlighting (multiple themes)
  - Mermaid diagrams
  - KaTeX math formulas
  - GFM tables, task lists
- **Table of Contents** - Collapsible sidebar navigation
- **Giscus Comments** - GitHub Discussions-based comment system

### 📄 Resume Page
- **JSON Configuration Driven** - Update resume by modifying JSON file
- **Responsive Design** - Adapts to all screen sizes
- **Print Friendly** - Export to PDF support

### 🎨 Other Features
- **Dark/Light Theme** - Auto-follows system theme
- **Responsive Layout** - Perfect for mobile and desktop
- **Scroll Buttons** - One-click scroll to top/bottom
- **SEO Friendly** - Semantic HTML structure
- **High Performance** - Vite build, fast loading

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion + GSAP |
| Routing | React Router (HashRouter) |
| Markdown | react-markdown + Shiki + Mermaid + KaTeX |
| Comments | Giscus |
| Typewriter | typed.js |

## 🚀 Quick Start

### Requirements

- Node.js >= 18
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit http://localhost:5173 to see the result.

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## ⚙️ Configuration

### 1. Site Configuration

Edit `src/config/site.json` to configure all website content:

```json
{
  "site": {
    "name": "Your Site Name",
    "title": "Site Title",
    "description": "Site description",
    "email": "your@email.com",
    "copyright": "Copyright info"
  },
  "nav": {
    "items": [
      { "name": "Home", "path": "/" },
      { "name": "Resume", "path": "/resume" },
      { "name": "Blog", "path": "/blog" }
    ]
  },
  "social": {
    "github": "https://github.com/your-username",
    "linkedin": "https://linkedin.com/in/your-profile",
    "email": "your@email.com"
  },
  "hero": {
    "typewriterText": ["HELLO!", "Hi there!"],
    "greeting": "Hi, I'm",
    "name": "Your Name",
    "description": "Your introduction",
    "buttons": {
      "resume": "View Resume",
      "blog": "Read Blog"
    }
  },
  "skills": {
    "title": "Tech Stack",
    "items": [...]
  },
  "projects": {
    "title": "Featured Work",
    "items": [...]
  },
  "cta": {
    "title": "Let's",
    "highlight": "Create Together",
    "buttonText": "Contact Me"
  }
}
```

### 2. Blog Configuration

Edit `src/services/github.ts` to set your GitHub repository:

```typescript
const REPO_OWNER = "your-github-username"  // Your GitHub username
const REPO_NAME = "your-repo-name"         // Your repository name
```

**Optional**: Configure GitHub Token to increase API rate limit:

1. Create `.env` file:
```bash
VITE_GITHUB_TOKEN=your_github_token
```

2. Create a token at [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens) (no permissions needed, just for rate limit)

### 3. Comments Configuration

1. Visit [giscus.app](https://giscus.app) to get configuration
2. Edit `src/components/blog/GiscusComments.tsx`:

```typescript
<Giscus
  repo="your-username/your-repo"
  repoId="Get from giscus.app"
  category="Announcements"
  categoryId="Get from giscus.app"
  // ...
/>
```

### 4. Resume Configuration

Edit `public/resume.json`:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "avatar": "Avatar URL",
  "contact": {
    "email": "Email",
    "phone": "Phone",
    "github": "GitHub URL",
    "website": "Website URL"
  },
  "summary": "Personal summary",
  "experience": [
    {
      "company": "Company Name",
      "position": "Position",
      "period": "2020 - Present",
      "description": "Job description",
      "highlights": ["Highlight 1", "Highlight 2"]
    }
  ],
  "education": [...],
  "skills": [...],
  "projects": [...]
}
```

### 5. Deployment Configuration

Edit `base` path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: "/your-repo-name/",  // Required for GitHub Pages deployment
  // Set to "/" if deploying to root domain
  // ...
})
```

## 📦 Deployment

### GitHub Pages (Recommended)

GitHub Actions is pre-configured for automatic deployment.

1. Go to repository Settings > Pages, set Source to "GitHub Actions"
2. Push code to `master` branch to trigger automatic deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Import GitHub repository
2. Select Vite as framework
3. Click Deploy

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Import GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📁 Project Structure

```
├── public/
│   └── resume.json          # Resume configuration
├── src/
│   ├── components/
│   │   ├── blog/            # Blog components
│   │   │   ├── GiscusComments.tsx
│   │   │   ├── MarkdownRenderer.tsx
│   │   │   └── TableOfContents.tsx
│   │   ├── home/            # Homepage components
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PixelTypewriter.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ScrollSection.tsx
│   │   │   └── SkillCard.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Navbar.tsx
│   │   ├── resume/          # Resume components
│   │   └── ui/              # UI components (shadcn/ui)
│   ├── config/
│   │   ├── site.json        # Site content configuration
│   │   └── index.ts         # Config exports
│   ├── hooks/               # Custom Hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx
│   │   ├── BlogListPage.tsx
│   │   ├── BlogDetailPage.tsx
│   │   └── ResumePage.tsx
│   ├── services/            # API services
│   │   └── github.ts        # GitHub API wrapper
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx              # App entry
│   ├── index.css            # Global styles
│   └── main.tsx             # Render entry
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🤝 Contributing

Issues and Pull Requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) - Powerful animation library
- [Giscus](https://giscus.app/) - GitHub Discussions-based comment system
- [Shiki](https://shiki.style/) - Code highlighting
- [typed.js](https://mattboldt.com/demos/typed-js/) - Typewriter effect

---

If this project helps you, please give it a ⭐ Star!
