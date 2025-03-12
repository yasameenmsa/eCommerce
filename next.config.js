/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'covers.openlibrary.org',
      'images.unsplash.com',
      'via.placeholder.com',
      'img-c.udemycdn.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig