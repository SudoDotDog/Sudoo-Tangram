module.exports = {
    stories: ["../stories/**/*.story.@(tsx|mdx)"],
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-controls",
        "@storybook/addon-essentials",
        "@storybook/preset-typescript",
        "@storybook/addon-viewport",
    ],
};