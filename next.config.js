/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export for GitHub Pages
  basePath: '/himanshu-portfolio',  // GitHub repo name
  assetPrefix: '/himanshu-portfolio/',  // Ensure assets load from correct path
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    unoptimized: true,  // Required for static export
  },
}

module.exports = nextConfig
