/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'appstorex.s3.us-west-2.amazonaws.com',
      'framerusercontent.com',
      'is1-ssl.mzstatic.com',
    ],
  },
};

export default nextConfig;
