const CracoAlias = require("craco-alias");
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@core": "src/core",
          "@features": "src/features",
          "@pages": "src/pages",
          "@components": "src/components",
          "@routes": "src/routes",
          "@layouts": "src/layouts",
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
