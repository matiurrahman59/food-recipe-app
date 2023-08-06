import { StatusBar } from 'expo-status-bar'
import {
	useFonts as usePoppins,
	Poppins_400Regular,
	Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'

// internal imports
import { Navigator } from './src/navigation'
import { FavoritesContextProvider } from './src/services/favorites/favoritesContext'

export default function App() {
	let [poppinsFontLoaded] = usePoppins({
		Poppins_400Regular,
		Poppins_600SemiBold,
	})

	if (!poppinsFontLoaded) return null

	return (
		<FavoritesContextProvider>
			<Navigator />
			<StatusBar style="auto" />
		</FavoritesContextProvider>
	)
}
