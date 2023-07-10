/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      "google.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "facebook.com", 
      "scontent.fbhz2-2.fna.fbcdn.net"
    ],
  },
};

module.exports = nextConfig