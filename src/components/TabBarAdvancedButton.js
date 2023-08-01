import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import Svg, { Path } from 'react-native-svg'

export const TabBarAdvancedButton = ({ bgColor, ...props }) => (
	<View className="flex-1 items-center">
		{/* <Svg width={71} height={58} viewBox="0 0 75 61">
			<Path
				d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
				fill={COLORS.white}
			/>
		</Svg> */}
		<TouchableOpacity
			onPress={props.onPress}
			style={{
				backgroundColor: COLORS.primary50,
			}}
			className="absolute w-12 h-12 rounded-full items-center justify-center -top-[22.5px]"
		>
			<AntDesign name="plus" size={21} style={{ color: COLORS.white }} />
		</TouchableOpacity>
	</View>
)
