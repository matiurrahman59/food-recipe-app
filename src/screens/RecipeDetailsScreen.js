import React from 'react'
import RecipeDetails from '../features/foodRecipe/RecipeDetails'

const RecipeDetailsScreen = ({ route }) => {
	const item = route.params
	return <RecipeDetails item={item} />
}

export default RecipeDetailsScreen
