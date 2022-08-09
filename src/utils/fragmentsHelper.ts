import { graphql } from 'gatsby'

export const menuFragments = graphql`
  fragment getMenus on WpMenuConnection {
    menus: nodes {
      locations
      name
      slug
      menuItems {
        nodes {
          cssClasses
          databaseId
          label
          parentDatabaseId
          parentId
          path
          childItems {
            nodes {
              cssClasses
              databaseId
              label
              parentDatabaseId
              parentId
              path
              order
              childItems {
                nodes {
                  databaseId
                  cssClasses
                  label
                  parentDatabaseId
                  parentId
                  path
                }
              }
            }
          }
        }
      }
    }
  }
`
