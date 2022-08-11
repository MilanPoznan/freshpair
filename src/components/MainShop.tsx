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
  DesktopCategories
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
  [key: string]: string[]
}

export default function MainShop({ shopData, allWpCategory }: Props) {

  const [activeCategory, setAtiveCategory] = useState<string[]>([])

  const [allProducts, setAllProducts] = useState<SneakersData[]>(shopData)

  const [activeProducts, setActiveProducts] = useState<SneakersData[]>(shopData)

  //Za sada ovo koristim pa cu posle cleanup
  const [allCat, setAllCat] = useState<any[]>()


  const { nodes: allFetchedCategories } = allWpCategory

  //ono sto sam sad siguran
  const [isPickCategoryOpen, setIsPickCategoryOpen] = useState(false)

  function sortMenuByParentCat(obj: any, category: any, singleItem: SneakersData) {
    if (obj.hasOwnProperty(category)) {
      singleItem.categories.nodes.map((item: any) => {
        if (item.name.toLowerCase() !== category) {
          obj[category].push(item.name);
        }
      })
    } else {
      obj[category] = []
    }
  }

  //Vrv nizasta ne treba naduvan napravio opet slucajno
  function returnProperShape() {

    const finalShoesShape = shopData.reduce((acc: SneakersData[], curr: SneakersData) => {

      let allCategories = curr.categories?.nodes[0]?.link.split('/')

      curr.mycattegories = [...curr.categories.nodes.map(item => item.name)]
      curr.parrentCategory = allCategories ? allCategories[2] : null
      acc.push(curr)
      return acc
    }, [])


    const xxx = finalShoesShape.reduce((acc: any, curr: SneakersData) => {
      sortMenuByParentCat(acc, curr.parrentCategory, curr)
      return acc
    }, {})

    console.log(finalShoesShape)
    return finalShoesShape
  }
  // const isCheckboxActive = (item: string) =>


  useEffect(() => {
    setAllProducts(returnProperShape())
    setActiveProducts(returnProperShape())
  }, [])



  useEffect(() => {


    //moze cleanup na kraju :) 
    const parrentCat = allFetchedCategories.reduce((acc: ParrentWithChildCategories, curr: any) => {
      if (curr.ancestors === null && curr.name !== 'Uncategorized') {
        console.log(name)
        acc[curr.name] = []
      }
      return acc
    },
      {})

    const parrentcatWithChild = allFetchedCategories.reduce((acc: ParrentWithChildCategories, curr: any) => {
      if (curr.ancestors !== null) {
        acc[curr.ancestors.nodes[0].name].push(curr.name)
      }
      return acc
    }, parrentCat)

    setAllCat(Object.entries(parrentcatWithChild))


  }, [])

  useEffect(() => {
    filterProducts()
  }, [activeCategory])


  function removeDuplicatesFromArr() {

  }

  function filterProducts() {

    let finalArr: SneakersData[] = []
    console.log(allProducts)

    if (activeCategory.length == 0) {
      setActiveProducts(allProducts)
    } else {
      allProducts.forEach(item => {
        console.log(item)
        item.mycattegories.map(singleCategory => {
          if (activeCategory.includes(singleCategory)) {
            finalArr.push(item)
            return item
          }
        })
      }
      )

      //Bukvalno neoptimizovano resenje al jbg mora se zuri. Refaktorisati ako se ikad nadje vremena
      //Ovako brisem duplikate iz arr ako neko bude citao :D 
      const uniq = [...new Set(finalArr)]
      console.log(uniq)

      setActiveProducts(uniq)
      console.log('filtered activeProducts', uniq)
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

        {
          <CategorySelectOptions isPickCategoryOpen={isPickCategoryOpen}>
            {allCat && allCat.map((allCategoiesArr: [string, string[]]) =>
              <SingleCategoryWrapper>
                <ParrentCat>
                  {allCategoiesArr[0]}
                  <CategoryCheckBox addActiveCategory={setAtiveCategory} catName={allCategoiesArr[0]} isParrentSelected={false} />
                </ParrentCat>
                {allCategoiesArr[1].map(childItem =>
                  <ChildCat>
                    {childItem}
                    <CategoryCheckBox addActiveCategory={setAtiveCategory} catName={childItem} isParrentSelected={activeCategory.includes(allCategoiesArr[0])} />

                  </ChildCat>)}

              </SingleCategoryWrapper>)}

          </CategorySelectOptions>
        }

      </CategoryFiltersWrapper>


      <AllProductsBox>

        {activeProducts && activeProducts.map(item => item &&
          <SingleProduct key={item.id}>
            <GatsbyImage alt="shoes featured" image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
            <Link to={item.link}>{item.title}</Link>
          </SingleProduct>

        )}
      </AllProductsBox>
    </MainShopWrapper>


  )
}