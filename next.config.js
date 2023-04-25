/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  publicRuntimeConfig: {
    apiUrl: "http://localhost:3000/api"
  },
};
