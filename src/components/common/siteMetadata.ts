import { graphql, useStaticQuery } from 'gatsby'

export const SiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            navArray {
              to
              text
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
