// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'], // Faqat hostname
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '6500',
          pathname: '/static/images/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  