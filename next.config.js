/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "google.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
