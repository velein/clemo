/** @type { import( "gatsby" ).GatsbyConfig } */
module.exports = {
    siteMetadata: {
        title: 'Clemo',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-emotion`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`montserrat:300,400,700`],
            },
        },
    ],
}
