// next.config.mjs

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    config.cache = false;
    return config;
  },

  // ✅ Add proper 301 redirects
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'globalvisainternationals.com',
          },
        ],
        destination: 'https://www.globalvisainternationals.com/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default withMDX(nextConfig);
