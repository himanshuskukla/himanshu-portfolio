/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export for GitHub Pages
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    unoptimized: true,  // Required for static export
  },
}

module.exports = nextConfig
