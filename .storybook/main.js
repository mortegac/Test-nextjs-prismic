const { getStoriesPaths } = require("slice-machine-ui/helpers/storybook");

module.exports = {
  stories: [
    "../lib/**/**/*.stories.mdx",
    "../lib/**/*.stories.mdx",
    "../lib/**/*.stories.@(js|jsx|ts|tsx)",
    "../lib/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../lib/**/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../lib/RMT_Common_Components/commonComponents/**/*.stories.@(js|jsx|ts|tsx)",
    "../lib/RMT_Common_Components/commonComponents/**/**/*.stories.@(js|jsx|ts|tsx)",
    ...getStoriesPaths(),
  ],
  addons: [
    "storybook-addon-styled-component-theme/dist/preset",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
};
