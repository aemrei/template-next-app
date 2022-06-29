const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../containers/**/*.stories.mdx",
    "../containers/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ]);

    return config;
  },
};
