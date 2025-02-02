/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "statics.doctoreto.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
