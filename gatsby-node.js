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
