import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  description: string
  title: string
  pageTitle: string
  image?: string
  meta: any[]
}


const Seo = ({ description = '', title = '', pageTitle = '', image, meta = [] }: Props) => {
  const { wp, wpUser } = useStaticQuery(
    graphql`
      query {
        wp {
          generalSettings {
            title
            description
          }
        }

        # if there's more than one user this would need to be filtered to the main user
        wpUser {
          twitter: name
        }
      }
    `
  )
  const metaDescription = description || wp.generalSettings?.description
  const defaultTitle = wp.generalSettings?.title
  const currPageTitle = pageTitle || title

  return (
    <Helmet
      title={currPageTitle}
      // titleTemplate={currPageTitle ? `%s | Bitebell` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: wpUser?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // @ts-ignore: Unreachable code error
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/*  @ts-ignore: Unreachable code error */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;700&family=Roboto:ital,wght@0,300;0,500;0,700;1,400&display=swap" rel="stylesheet" />
    </Helmet>
  )
}
export default Seo