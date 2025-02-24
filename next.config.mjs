/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Vercel deployment
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }],
  },
};

export default nextConfig;
