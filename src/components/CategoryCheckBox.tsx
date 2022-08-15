import React, { useState } from 'react'

type Props = {
  addActiveCategory: React.Dispatch<React.SetStateAction<[] | string[]>>
  catName: string;
  isParrentSelected: boolean
  isSelected?: boolean
}
import { CategoryCheckBoxStyle } from './MainShop.styled'

export default function CategoryCheckBox({ addActiveCategory, catName, isParrentSelected, isSelected }: Props) {

  const [isChecked, setisChecked] = useState(isSelected)

  function addOrRemoveCategory() {
    if (!isChecked) {
      addActiveCategory(activeCategory => [...activeCategory, catName])
    } else {
      addActiveCategory(activeCategory => activeCategory.filter((item: string) => catName !== item))
    }

  }
  return (
    <CategoryCheckBoxStyle
      isParrentSelected={isParrentSelected}
      onClick={() => {
        setisChecked(isChecked => !isChecked)
        addOrRemoveCategory()
      }
      }
    >
      {
        isChecked && !isParrentSelected && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
      }
      {isParrentSelected && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>}
    </CategoryCheckBoxStyle >
  )
}