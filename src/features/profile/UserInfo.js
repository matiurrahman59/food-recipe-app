import { View } from 'react-native'
import React from 'react'
import TextComponent from '../../components/TextComponent'

const UserInfo = ({ title, value }) => {
	return (
		<View className="flex items-center">
			<TextComponent additionalClassName="font-poppins text-xs">
				{title}
			</TextComponent>
			<TextComponent type="h1">{value}</TextComponent>
		</View>
	)
}

export default UserInfo
