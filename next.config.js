/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const apiUrl = "http://localhost:3000/api"
const apiVersion = "v1"

module.exports = {
  publicRuntimeConfig: {
    apiUrl: `${apiUrl}/${apiVersion}`,
  },
};
