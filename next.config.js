module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  distDir: 'dist',
  images: {
    domains: ["images.prismic.io", "images.unsplash.com"],
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
};
