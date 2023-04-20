/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.w3schools.com',
        port: '',
        pathname: '/howto/img_avatar.png',
      },
    ],
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
}

module.exports = nextConfig
