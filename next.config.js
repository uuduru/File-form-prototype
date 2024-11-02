/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:any*',
            destination: '/',
          },
        ];
      },
    experimental: {
        appDir: true,
      },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false,
            }
        }

        return config;
    },

    devServer: {
        historyApiFallback: true,
      },

    distDir: 'dist',

    // output: 'standalone',

}



module.exports = nextConfig


