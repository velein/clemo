const path = require('path')

/**
 * Custom webpack config for Storybook
 * @param {{ config: import( "webpack" ).Configuration }}
 */
module.exports = ({ config }) => {
    /**
     * Explicit aliases config to make `absolute imports` work in Storybook
     * TODO: Make these aliases reusable because gatsby-node needs similar config
     */
    config.resolve.alias = {
        ...config.resolve.alias,
        '~components': path.resolve(__dirname, '../src/components'),
        '~styled': path.resolve(__dirname, '../src/styled'),
        '~layouts': path.resolve(__dirname, '../src/layouts'),
    }

    /**
     * SVG files were not working in Storyblok due to default webpack config
     * could not load them properly.
     * @see https://github.com/storybookjs/storybook/issues/6188
     */
    config.module.rules.unshift({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
    })

    return config
}
