/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cs.rkmvu.ac.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
