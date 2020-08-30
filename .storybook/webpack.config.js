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

    return config
}
