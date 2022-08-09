import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { SneakersData } from '../templates/shop-template'

import CategoryCheckBox from './CategoryCheckBox'

import {
  SearchForOptions,
  ChildCat,
  SingleMainCatAll,
  MainShopWrapper,
  CategoryFiltersWrapper,
  AllProductsBox, SingleProduct, ParrentCat,
  CategorySelectBox,
  SingleCategoryWrapper,
  CategorySelectOptions,
} from './MainShop.styled'

type Props = {
  shopData: SneakersData[]
  allWpCategory: any
}

interface SingleSneaker {
  title: string
}

interface CategoryType {
  [key: string]: SingleSneaker[]
}

interface ParrentWithChildCategories {
  [key: number]: string[]
}

export default function MainShop({ shopData, allWpCategory }: Props) {

  const [activeCategory, setAtiveCategory] = useState<string[]>([])

  const [allProducts, setAllProducts] = useState<SneakersData[]>(shopData)

  const [activeProducts, setActiveProducts] = useState<SneakersData[]>(shopData)

  const [allCat, setAllCat] = useState<ParrentWithChildCategories | undefined>()

  const [allCategoriesSameLevel, setAllCategoriesSameLevel] = useState([])

  const { nodes: allFetchedCategories } = allWpCategory



  //ono sto sam sad siguran
  const [isPickCategoryOpen, setIsPickCategoryOpen] = useState(false)



  function returnProperShape() {
    const xxx = shopData.reduce((acc: SneakersData[], curr: SneakersData) => {
      curr.mycattegories = [...curr.categories.nodes.map(item => item.name)]
      acc.push(curr)
      return acc
    }, [])
    return xxx
  }
  // const isCheckboxActive = (item: string) =>


  useEffect(() => {
    console.log('ooooo', returnProperShape())
    setAllProducts(returnProperShape())
    setActiveProducts(returnProperShape())
  }, [])

  useEffect(() => {

    const parrentCat = allFetchedCategories.reduce((acc: ParrentWithChildCategories, curr: any) => {
      if (curr.ancestors === null && curr.name !== 'Uncategorized') {
        console.log(name)
        acc[curr.name] = []
      }
      return acc
    },
      {})

    const parrentcatWithChild: ParrentWithChildCategories = allFetchedCategories.reduce((acc: ParrentWithChildCategories, curr: any) => {
      if (curr.ancestors !== null) {
        acc[curr.ancestors.nodes[0].name].push(curr.name)
      }
      return acc
    }, parrentCat)

    setAllCat(parrentcatWithChild)

    //Ovo sada koristim
    const sameLvl = allFetchedCategories.map((item: any) => item.name)

    setAllCategoriesSameLevel(sameLvl)

  }, [])

  useEffect(() => {
    console.log('activeCategory', activeCategory)
    filterProducts()
  }, [activeCategory])


  function filterProducts() {

    let finalArr: SneakersData[] = []

    console.log('activeProducts', activeProducts)

    if (activeCategory.length == 0) {
      setActiveProducts(allProducts)
    } else {
      allProducts.forEach(item => {
        // console.log('first', item)
        item.mycattegories.map(singleCategory => {
          if (activeCategory.includes(singleCategory)) {
            finalArr.push(item)
            return item
          }
        })
      }
      )
      setActiveProducts(finalArr)
      console.log('filtered activeProducts', finalArr)
    }

  }



  return (
    <MainShopWrapper>
      <CategoryFiltersWrapper>
        <CategorySelectBox
          isOpen={isPickCategoryOpen}
          onClick={() => setIsPickCategoryOpen(isPickCategoryOpen => !isPickCategoryOpen)}>
          PICK BRAND
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#7f7f7f" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" /></svg>
        </CategorySelectBox>

        {isPickCategoryOpen &&
          <CategorySelectOptions>
            {allCategoriesSameLevel.map((item: string) =>
              <SingleCategoryWrapper>
                <CategoryCheckBox addActiveCategory={setAtiveCategory} catName={item} />
                <ParrentCat>{item}</ParrentCat>
              </SingleCategoryWrapper>)}
            {/* <SearchForOptions onClick={filterProducts}>Apply Filters</SearchForOptions> */}

          </CategorySelectOptions>
        }


        {/* Ovo cu da koristim ako budem imao parrent i children categorije */}
        {allCat && Object.entries(allCat).map(item => <SingleMainCatAll className="asdasd">
          <SingleCategoryWrapper>
            <ParrentCat
            // onClick={() => setAtiveCategory(item[0])} 
            >
              {item[0]}
            </ParrentCat>

          </SingleCategoryWrapper>
          {item[1].map((item: string) =>
            <ChildCat
            // onClick={() => setAtiveCategory(item)}
            >
              {item}</ChildCat>)}
        </SingleMainCatAll>)}



      </CategoryFiltersWrapper>
      <AllProductsBox>

        {activeProducts && activeProducts.map(item => item &&
          <SingleProduct key={item.id}>
            <GatsbyImage alt="shoes featured" image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
            <Link to={item.link}>{item.title}</Link>
          </SingleProduct>

        )}

        {/* {activeProducts && activeCategory !== '' &&
          activeProducts.map((item: any) => item &&

            <SingleProduct key={item.id}>
              <GatsbyImage alt="shoes featured" image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
              <Link to={item.link}>{item.title}</Link>
            </SingleProduct>)} */}
      </AllProductsBox>
    </MainShopWrapper>


  )
}