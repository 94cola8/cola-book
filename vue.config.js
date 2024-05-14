module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.cola.wiki",
        changeOrigin: true,
      },
    },
  },
};
