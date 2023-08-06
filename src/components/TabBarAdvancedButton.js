import { View } from 'react-native'

import { COLORS } from '../../constants'
import Icon from './Icon'

export const TabBarAdvancedButton = ({ bgColor, ...props }) => (
	<View className="flex-1 items-center">
		<Icon
			name="plus"
			size={21}
			color={COLORS.white}
			onPress={props.onPress}
			style={{
				backgroundColor: COLORS.primary50,
			}}
			className="absolute w-12 h-12 rounded-full items-center justify-center -top-[22.5px]"
		/>
	</View>
)
