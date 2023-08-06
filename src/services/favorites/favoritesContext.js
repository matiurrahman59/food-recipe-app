import { createContext, useState } from 'react'

export const FavoritesContext = createContext({
	favorites: [],
	addToFavorites: el => {},
	removeFromFavorites: el => {},
})

export const FavoritesContextProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([])

	const addToFavorites = recipe => {
		setFavorites([...favorites, recipe])
	}

	const removeFromFavorites = recipe => {
		const newFavorites = favorites.filter(item => item.id !== recipe.id)

		setFavorites(newFavorites)
	}

	return (
		<FavoritesContext.Provider
			value={{ favorites, addToFavorites, removeFromFavorites }}
		>
			{children}
		</FavoritesContext.Provider>
	)
}
