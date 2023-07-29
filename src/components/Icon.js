import React from 'react'
import TouchableButton from './TouchableButton'
import { Feather } from '@expo/vector-icons'

const Icon = ({ name, size, color, ...restProps }) => {
	return (
		<TouchableButton {...restProps}>
			<Feather name={name} size={size} color={color} />
		</TouchableButton>
	)
}

export default Icon
