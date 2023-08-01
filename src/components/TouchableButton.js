import { TouchableOpacity } from 'react-native'
import React from 'react'

const TouchableButton = ({ children, ...restProps }) => {
	return <TouchableOpacity {...restProps}>{children}</TouchableOpacity>
}

export default TouchableButton
