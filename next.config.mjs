/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "visiwave.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
