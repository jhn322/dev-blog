# ![Semurai Dev Blog](/data/logo.svg) Semurai Dev Blog

A developer blog focused on software development, technical insights, and best practices. Built with modern web technologies, this blog aims to share knowledge and experiences in software development.

## Getting Started

This guide will help you set up the Semurai Dev Blog locally on your machine.

### Required Software

- Node.js 18+
- npm or yarn
- Obsidian app

### Installation Steps

1. Clone the repositories:

```bash
git clone https://github.com/SemuraiAB/semurai-dev-blog.git
git clone https://github.com/SemuraiAB/blog-content.git
cd semurai-dev-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Initialize and update the submodule:

```bash
git submodule init
git submodule update
```

If you need to clone the submodule anew (if it doesn't exist), run:

```bash
git submodule add https://github.com/SemuraiAB/blog-content
```

This will create a new submodule in the root directory named `blog-content`.

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog.

#### Obsidian Setup

1.

```bash
Install the Obsidian app from their website: https://obsidian.md/
```

2.

```bash
Click on "Manage Vault" -> "Open folder as vault" -> Select the "blog-content" folder -> Click "Open".
```

3.

```bash
Go to "Settings" -> "Community plugins" -> Enable and "Browse community plugins" -> Search for "Git" -> Install.

Restart Obsidian to activate the plugin.

Ctrl + G to open the Git sidebar.
```

4.

```bash
In the blog folder make a new note or edit an existing one.

When done, click "Stage all", "Commit-and-sync". This will push the changes to the remote repositories.
```

### Project Structure

```
dev-blog/
├── app/                # Next.js app directory
├── components/         # React components
├── css/               # Global styles and Tailwind config
├── data/              # Blog posts and site metadata
├── layouts/           # Page layout components
└── public/            # Static assets
```

### Features

- Responsive design for all devices
- Dark/light theme support
- Fast page loads with Next.js
- SEO optimized
- Markdown support with MDX
- Syntax highlighting for code blocks
- Image optimization
- RSS feed
- Sitemap generation
