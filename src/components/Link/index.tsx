/**
 * We need to use `gatsby-link` package because Storybook fails to build if
 * we are using plain link from Gatsby
 * @see https://github.com/gatsbyjs/gatsby/issues/10668
 */
import { default as GatsbyLink } from 'gatsby-link'

export const Link = GatsbyLink
