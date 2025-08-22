/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // ✅ tells Next.js to use static export
  images: {
    unoptimized: true, // ✅ required if using next/image
  },
};

export default nextConfig;
