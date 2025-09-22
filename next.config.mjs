import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Safe performance optimizations only
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:5000', '*.replit.app', '*.repl.it', '*.replit.dev']
    },
    // Only safe package optimizations
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.replit.app',
      },
      {
        protocol: 'https', 
        hostname: '*.repl.it',
      },
      {
        protocol: 'https',
        hostname: '*.replit.dev',
      }
    ]
  }
};

export default withNextIntl(nextConfig);