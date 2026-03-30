# Elite Global School

Elite Global School is a premium educational institution's website, built with modern web technologies to provide a seamless experience for parents, students, and educators. This project focuses on academic excellence, sports academy training, and holistic development.

## 🚀 Key Features

- **Next.js 16+**: High-performance React framework with App Router support.
- **Tailwind CSS 4**: Utility-first styling for a sleek and responsive design.
- **Framer Motion**: Fluid and interactive animations across all sections.
- **3D Interactive Elements**: Integrated with `three.js` and `@react-three/fiber` for immersive experiences.
- **SEO Optimized**: Advanced SEO strategies including JSON-LD structured data and optimized meta tags.
- **Image Optimization**: Automated script for converting and compressing images to `.webp` format using `sharp`.
- **Responsive Design**: Tailored experiences for desktop, tablet, and mobile devices.

## 🛠️ Technical Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [Lucide React](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons/)
- **Optimization**: [Sharp](https://sharp.pixelplumbing.com/)

## 📂 Project Structure

- `app/`: Next.js App Router routes and layouts.
- `components/`:
  - `layout/`: Common layout components (Header, Footer, etc.).
  - `sections/`: High-level page sections (Hero, Ethos, Vision, etc.).
  - `ui/`: Reusable primitive components.
- `public/`: Static assets including images, icons, and videos.
- `scripts/`: Custom scripts for build and optimization tasks.
- `data/`: Static data and configuration files.

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest stable version)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Image Compression

To optimize images in the `/public/assets` and `/public/banner` directories:

```bash
node scripts/compress-images.mjs
```

*Note: Originals will be backed up to `_backup_*` directories.*

## 🚀 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/):

1. Connect your repository to Vercel.
2. Vercel will automatically detect the Next.js settings.
3. Deploy!

## 📄 License

This project is private and intended for Elite Global School.

---
Built with ❤️ for [Ayatiworks Technologies](https://ayatiworks.com) Rubankumar S
