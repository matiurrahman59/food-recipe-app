import { Dimensions, StatusBar } from 'react-native'
import { COLORS } from './colors'
import { Images } from './images'

const { width, height } = Dimensions.get('window')
export const statusBar = StatusBar.currentHeight || 0
const DEVICE = {
	width,
	height,
	statusBar,
}

export { COLORS, DEVICE, Images }
