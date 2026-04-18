const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use the base path in production (GitHub Pages)
  basePath: isProd ? '/Rence-Alert' : '',
};

export default nextConfig;
