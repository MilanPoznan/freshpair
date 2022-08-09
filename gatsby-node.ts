const path = require(`path`)
const chunk = require(`lodash/chunk`)
require("dotenv").config();
// @ts-check
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */


function resolvePathForTemplate(page: string) {
  switch (page) {
    case 'pocetna':
      return path.resolve('./src/templates/home-template.tsx')
    case 'shop':
      return path.resolve('./src/templates/shop-template.tsx')
    case 'checkout':
      return path.resolve('./src/templates/checkout-template.tsx')
    default:
      return path.resolve('./src/templates/page-template.tsx')
  }
}

exports.createPages = async ({ graphql, actions, reporter }: any) => {
  const allPages = await getPages(graphql, reporter);
  const allShoes = await getShoes(graphql, reporter)


  allPages.nodes.forEach((page: any) => actions.createPage({
    path: page.uri,
    component: resolvePathForTemplate(page.slug),
    context: {
      id: page.id,
      slug: page.slug
    }
  }))



  allShoes.nodes.forEach((page: any) => actions.createPage({
    path: page.uri,
    component: path.resolve("./src/templates/shoe-template.tsx"),
    context: {
      id: page.id,
      slug: page.slug
    }
  }))
}

async function getPages(graphql: any, reporter: any) {

  const pageResult = await graphql(`
  query WpPages {
    allWpPage {
        nodes {
          id
          title
          slug
          uri
        }
      }
  }
  
  `)
  if (pageResult.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Single Page',
      pageResult.errors
    )
    return
  }
  return pageResult.data.allWpPage

}


async function getShoes(graphql: any, reporter: any) {

  const shoeResult = await graphql(`
    query WpShoes {
      allWpSneaker {
        nodes {
          id
          link
          slug
          status
          title
          uri
          featuredImage {
                node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
  `)

  if (shoeResult.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Single Page',
      shoeResult.errors
    )
    return
  }
  return shoeResult.data.allWpSneaker

}