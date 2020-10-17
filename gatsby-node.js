const path = require('path')

/** @type { import( "gatsby" ).GatsbyNode['onCreatePage'] } */
exports.onCreatePage = async ({ actions, page }) => {
    const { createPage, deletePage } = actions

    /**
     * Set custom path for MDX page if the `path` field is present in
     * frontmatter fields.
     */
    if (page.context && page.context.frontmatter) {
        deletePage(page)
        createPage({
            ...page,
            context: {
                ...page.context,
            },
            path: page.context.frontmatter.path || page.path,
        })
    }
}

/** @type { import( "gatsby" ).GatsbyNode['onCreateWebpackConfig'] } */
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '~components': path.resolve(__dirname, 'src/components'),
                '~styled': path.resolve(__dirname, 'src/styled'),
                '~layouts': path.resolve(__dirname, 'src/layouts'),
                '~modules': path.resolve(__dirname, 'src/modules')
            },
        },
    })
}
