export interface Cocktail {
  drinks: Drink[]
}

export interface Ingredients_Mesures {
  strIngredient1: null | string | undefined
  strIngredient2: null | string | undefined
  strIngredient3: null | string | undefined
  strIngredient4: null | string | undefined
  strIngredient5: null | string | undefined
  strIngredient6: null | string | undefined
  strIngredient7: null | string | undefined
  strIngredient8: null | string | undefined
  strIngredient9: null | string | undefined
  strIngredient10: null | string | undefined
  strIngredient11: null | string | undefined
  strIngredient12: null | string | undefined
  strIngredient13: null | string | undefined
  strIngredient14: null | string | undefined
  strIngredient15: null | string | undefined
  strMeasure1: null | string | undefined
  strMeasure2: null | string | undefined
  strMeasure3: null | string | undefined
  strMeasure4: null | string | undefined
  strMeasure5: null | string | undefined
  strMeasure6: null | string | undefined
  strMeasure7: null | string | undefined
  strMeasure8: null | string | undefined
  strMeasure9: null | string | undefined
  strMeasure10: null | string | undefined
  strMeasure11: null | string | undefined
  strMeasure12: null | string | undefined
  strMeasure13: null | string | undefined
  strMeasure14: null | string | undefined
  strMeasure15: null | string | undefined
}

export interface Drink {
  index: string
  idDrink: string
  strDrink: string
  strDrinkAlternate: null
  strTags: null | string
  strVideo: null
  strCategory: string
  strIBA: null | string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strInstructionsES: null
  strInstructionsDE: null | string
  strInstructionsFR: null
  strInstructionsIT: string
  'strInstructionsZH-HANS': null
  'strInstructionsZH-HANT': null
  strDrinkThumb: string
  strIngredient1: null | string | undefined
  strIngredient2: null | string | undefined
  strIngredient3: null | string | undefined
  strIngredient4: null | string | undefined
  strIngredient5: null | string | undefined
  strIngredient6: null | string | undefined
  strIngredient7: null | string | undefined
  strIngredient8: null | string | undefined
  strIngredient9: null | string | undefined
  strIngredient10: null | string | undefined
  strIngredient11: null | string | undefined
  strIngredient12: null | string | undefined
  strIngredient13: null | string | undefined
  strIngredient14: null | string | undefined
  strIngredient15: null | string | undefined
  strMeasure1: null | string | undefined
  strMeasure2: null | string | undefined
  strMeasure3: null | string | undefined
  strMeasure4: null | string | undefined
  strMeasure5: null | string | undefined
  strMeasure6: null | string | undefined
  strMeasure7: null | string | undefined
  strMeasure8: null | string | undefined
  strMeasure9: null | string | undefined
  strMeasure10: null | string | undefined
  strMeasure11: null | string | undefined
  strMeasure12: null | string | undefined
  strMeasure13: null | string | undefined
  strMeasure14: null | string | undefined
  strMeasure15: null | string | undefined
  strImageSource: null | string
  strImageAttribution: null | string
  strCreativeCommonsConfirmed: string
  dateModified: Date | null
}
