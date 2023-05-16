/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

require("dotenv").config()

module.exports = nextConfig

const apiUrl = process.env.API_URL
const apiVersion = process.env.API_VERSION

module.exports = {
  publicRuntimeConfig: {
    apiUrl: `${apiUrl}/${apiVersion}`,
  },
};
