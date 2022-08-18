import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { WYSIWYGWrapper, ContentWrapper, Heading2 } from '../global-styles/globalComponents'

export default function Page({ data, location }: any) {

  const { wpPage: { title, slug, content }, allWpMenu: { menus } } = data


  return (
    <Layout menus={menus[0]}>
      <ContentWrapper>
        <div style={{ paddingTop: '120px' }}></div>
        <Heading2>{title}</Heading2>
        <div style={{ paddingTop: '40px' }}></div>

        <WYSIWYGWrapper dangerouslySetInnerHTML={{ __html: content }}></WYSIWYGWrapper>
        <div style={{ paddingTop: '80px' }}></div>
      </ContentWrapper>
    </Layout>
  )
}



export const pageQuery = graphql`
  query contentPageByID($id: String) {
  allWpMenu {
    ...getMenus
  }
  wpPage(id: {eq: $id}) {
    title
    slug
    uri
    content
    }
}` 