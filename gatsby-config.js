/** @type { import( "gatsby" ).GatsbyConfig } */
module.exports = {
    siteMetadata: {
        title: 'Clemo',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/layouts/Page.tsx'),
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
    ],
}
