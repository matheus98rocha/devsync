/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: [
      "utfs.io",
      "google.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
