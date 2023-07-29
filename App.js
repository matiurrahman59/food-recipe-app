import { StatusBar } from 'expo-status-bar'
import { Navigator } from './src/navigation'
import {
	useFonts as usePoppins,
	Poppins_100Thin,
	Poppins_400Regular,
	Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'

export default function App() {
	let [poppinsFontLoaded] = usePoppins({
		Poppins_100Thin,
		Poppins_400Regular,
		Poppins_600SemiBold,
	})

	if (!poppinsFontLoaded) return null

	return (
		<>
			<Navigator />
			<StatusBar style="auto" />
		</>
	)
}
