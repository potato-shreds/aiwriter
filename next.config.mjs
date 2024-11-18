/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/support.html',
        destination: '/support',
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      'appstorex.s3.us-west-2.amazonaws.com',
      'framerusercontent.com',
      'is1-ssl.mzstatic.com',
    ],
  },
};

export default nextConfig;
