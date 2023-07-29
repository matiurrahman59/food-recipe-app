import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign as Icon } from '@expo/vector-icons'

import TextComponent from './TextComponent'
import TouchableButton from './TouchableButton'
import { COLORS } from '../../constants'

const SectionHeader = ({ label, onPress, button }) => {
	return (
		<View className="px-5 flex-row justify-between items-center mt-3">
			<TextComponent type="h2">{label}</TextComponent>
			{button && (
				<TouchableButton
					onPress={onPress}
					className="flex-row items-center space-x-1"
				>
					<TextComponent
						type="h4"
						customStyle={{
							color: COLORS.primary50,
						}}
					>
						See all
					</TextComponent>
					<Icon name="arrowright" size={20} color={COLORS.primary50} />
				</TouchableButton>
			)}
		</View>
	)
}

export default SectionHeader
