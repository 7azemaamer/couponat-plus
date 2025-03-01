/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "couponksa.com",
      },
    ],
  },
};

export default nextConfig;
