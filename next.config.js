/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 30,
  env: {
    UI_HOSTNAME: process.env.UI_HOSTNAME,
    MEDIA_STORAGE_HOST: process.env.MEDIA_STORAGE_HOST,
    API_BASE_URL: process.env.API_BASE_URL,
    TURNSTILE_KEY: process.env.TURNSTILE_KEY,
    AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
    AUTH_CLIENT_SECRET: process.env.AUTH_CLIENT_SECRET,
  },
  images: {
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagsapi.com',
      },
      {
        protocol: 'https',
        hostname: 'vl.imgix.net',
      },
      {
        protocol: 'https',
        hostname: 'www.pqsjapan.jp',
      },
      {
        protocol: 'https',
        hostname: 'pqsjapanstorage.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'api.pqsjapan.jp',
      },
    ],
  },
}

module.exports = nextConfig
