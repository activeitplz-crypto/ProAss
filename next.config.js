/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.postimg.cc"], // allow profile/logo image
  },
};

module.exports = nextConfig;