/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    images: {
        domains: ["phpstack-841991-3041837.cloudwaysapps.com"],
    },
    experimental: {
        largePageDataBytes: 128 * 100000, // 128KB by default
    },
    i18n: {
        locales: ["en", "ja", "zh"],
        defaultLocale: "en",
    },
};
