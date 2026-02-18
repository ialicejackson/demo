/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",  
        hostname: "aeroadvisior.vercel.app",
        port: "",
      pathname: '/uploads/**',
      },
    ],
    // domains: ['stonediscoveruk-apibackend.onrender.com'],
    deviceSizes: [320, 420, 768, 1024, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           // value: "public, max-age=31536000, immutable",
  //           value: "no-store, no-cache, must-revalidate, proxy-revalidate",
  //         },
  //       ],
  //     },
  //   ];
  // },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
