import { IGatsbyImageData } from "gatsby-plugin-image"

export interface GatsbyImageInterface {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  altText?: string;
}


export interface GatsbyImageInterface3 {
  image: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    altText?: string;
  }
}


export interface LanguageObject {
  locale: string
}


export interface GatsbyImageInterface2 {
  node: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    altText?: string;
  }
}
