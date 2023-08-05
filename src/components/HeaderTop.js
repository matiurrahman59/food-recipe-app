import { View } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent'
import Icon from './Icon'

const HeaderTop = ({ title, iconName }) => {
	return (
		<View className="flex-row justify-between items-center mx-5 mt-5">
			<TextComponent type="h1">{title}</TextComponent>
			{iconName && <Icon name={iconName} size={24} />}
		</View>
	)
}

export default HeaderTop
