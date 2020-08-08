/** @type { import("gatsby").GatsbyConfig } */
module.exports = {
    siteMetadata: {
        title: 'Clemo',
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
    ],
}
