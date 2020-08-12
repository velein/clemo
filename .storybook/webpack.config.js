const path = require('path')

module.exports = ({ config }) => {
    // TODO: Make these aliases reusables because gatsby-node needs similar config
    config.resolve.alias = {
        ...config.resolve.alias,
        '~components': path.resolve(__dirname, '../src/components'),
        '~styled': path.resolve(__dirname, '../src/styled'),
    }

    return config
}
