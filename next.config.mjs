/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",

        pathname: "/**",
        hostname: "my.certifyme.online",
      },
      {
        protocol: "https",
        pathname: "/**",
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
