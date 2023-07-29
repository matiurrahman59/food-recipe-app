import { TouchableOpacity } from 'react-native'
import React from 'react'

const TouchableButton = ({ children, onPress, ...restProps }) => {
	return (
		<TouchableOpacity onPress={onPress} {...restProps}>
			{children}
		</TouchableOpacity>
	)
}

export default TouchableButton
