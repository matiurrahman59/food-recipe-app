import { useContext } from 'react'

import Icon from './Icon'
import { COLORS } from '../../constants'
import { FavoritesContext } from '../services/favorites/favoritesContext'

const BookmarkButton = ({ recipe }) => {
	const { favorites, addToFavorites, removeFromFavorites } =
		useContext(FavoritesContext)

	const isFavourite = favorites.find(item => item.id === recipe.id)

	return (
		<Icon
			onPress={() =>
				!isFavourite ? addToFavorites(recipe) : removeFromFavorites(recipe)
			}
			name="bookmark"
			size={22}
			className="absolute right-2 top-2 p-1.5 rounded-full"
			color={isFavourite ? COLORS.white : COLORS.neutral90}
			style={{
				backgroundColor: isFavourite ? COLORS.primary50 : COLORS.white,
			}}
		/>
	)
}

export default BookmarkButton
