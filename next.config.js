/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        largePageDataBytes: 256 * 100000,
    },
};

module.exports = {
    images: {
        domains: ["phpstack-841991-2998353.cloudwaysapps.com"],
    },
    nextConfig,
};
