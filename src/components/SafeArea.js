import { SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, DEVICE } from '../../constants'

const SafeArea = ({ children }) => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				paddingTop: DEVICE.statusBar,
				backgroundColor: COLORS.white,
			}}
		>
			{children}
		</SafeAreaView>
	)
}

export default SafeArea
