/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the base path matches the GitHub Repo name for Pages
  basePath: '/Rence-Alert',
  assetPrefix: '/Rence-Alert',
};

export default nextConfig;
