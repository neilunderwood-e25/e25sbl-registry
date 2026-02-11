# E25 Section Library Registry

Component registry for [@neilunderwood/e25sbl](https://www.npmjs.com/package/@neilunderwood/e25sbl) CLI.

## Overview

This Next.js project serves as the registry for all website sections that can be installed via the `@neilunderwood/e25sbl` CLI. It includes:

- **Component Source Files**: Real Next.js components in `/sections`
- **Registry Metadata**: Section catalog in `/registry`
- **Preview Pages**: Live previews at `/preview/[section-id]`
- **Storybook**: Interactive component explorer (coming soon)

## Project Structure

```
e25sbl-registry/
├── sections/              # Component source files (CLI fetches from here)
│   └── hero-1.tsx
├── registry/
│   ├── registry.json     # Main registry index
│   └── metadata/         # Detailed metadata per section
│       └── hero-1.json
├── app/
│   ├── page.tsx          # Homepage: Browse all sections
│   └── preview/
│       └── [id]/         # Preview pages for each section
├── public/
│   └── assets/           # Section assets (images, etc.)
└── stories/              # Storybook stories (coming soon)
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000 to see the registry homepage.

### Adding a New Section

1. **Create component** in `sections/your-section.tsx`:
   ```tsx
   export default function YourSection() {
     return <section>{/* ... */}</section>
   }
   ```

2. **Add preview page** at `app/preview/your-section/page.tsx`:
   ```tsx
   import YourSection from "@/sections/your-section";
   export default function Preview() {
     return <YourSection />;
   }
   ```

3. **Update registry** in `registry/registry.json`:
   ```json
   {
     "id": "your-section",
     "name": "Your Section",
     "description": "...",
     "category": "heroes",
     "tags": ["hero"],
     "hasAssets": false,
     "files": {
       "component": "sections/your-section.tsx",
       "assets": []
     }
   }
   ```

4. **Create metadata** in `registry/metadata/your-section.json`

5. **Test locally**:
   - Preview at http://localhost:3000/preview/your-section
   - Check homepage lists the new section

6. **Commit and push** - changes go live immediately!

### Adding Assets

If your section needs images/assets:

1. Create folder: `public/assets/your-section/`
2. Add assets: `public/assets/your-section/image.jpg`
3. Reference in component: `<img src="/assets/your-section/image.jpg" />`
4. Update `registry.json` with `"hasAssets": true`
5. List files in `assets` array

## Deployment

This project auto-deploys to Vercel on every push to `main`.

- **Live Site**: https://e25sbl-registry.vercel.app
- **Registry API**: Raw files fetched from GitHub

## CLI Integration

The `@neilunderwood/e25sbl` CLI fetches components from this repository via GitHub raw URLs:

```
https://raw.githubusercontent.com/YOUR-USERNAME/e25sbl-registry/main/sections/hero-1.tsx
```

When users run:
```bash
npx @neilunderwood/e25sbl hero-1
```

The CLI:
1. Fetches `registry.json` to find the section
2. Downloads component from GitHub
3. Downloads assets (if any)
4. Installs to user's project

## Contributing

1. Fork this repository
2. Create a new section following the guide above
3. Test locally
4. Submit a pull request

## License

MIT
