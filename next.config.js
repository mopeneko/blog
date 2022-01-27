/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const config = {
    reactStrictMode: true,
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
};

module.exports = withPWA(config);
