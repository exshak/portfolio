import { graphql, useStaticQuery } from 'gatsby'

export const SiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          username
          author
          navigation {
            to
            text
            textLong
          }
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  return site.siteMetadata
}
