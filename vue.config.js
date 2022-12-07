// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
// });

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://takeaway.dev.marvelconnect.com/",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
