import { View } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent'

const HeadingText = ({ children }) => {
	return (
		<View className="pt-5 pl-[22px] max-w-[244px]">
			<TextComponent type="h1">{children}</TextComponent>
		</View>
	)
}

export default HeadingText
