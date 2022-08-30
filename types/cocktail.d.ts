export interface Cocktail {
  drinks: Drink[]
}

export interface Drink {
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
  strIngredient1: string
  strIngredient2: string
  strIngredient3: string
  strIngredient4: null | string
  strIngredient5: null | string
  strIngredient6: null | string
  strIngredient7: null | string
  strIngredient8: null
  strIngredient9: null
  strIngredient10: null
  strIngredient11: null
  strIngredient12: null
  strIngredient13: null
  strIngredient14: null
  strIngredient15: null
  strMeasure1: string
  strMeasure2: string
  strMeasure3: string
  strMeasure4: null | string
  strMeasure5: null | string
  strMeasure6: null | string
  strMeasure7: null | string
  strMeasure8: null
  strMeasure9: null
  strMeasure10: null
  strMeasure11: null
  strMeasure12: null
  strMeasure13: null
  strMeasure14: null
  strMeasure15: null
  strImageSource: null | string
  strImageAttribution: null | string
  strCreativeCommonsConfirmed: string
  dateModified: Date | null
}
