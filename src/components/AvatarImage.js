import { View, Image } from 'react-native'
import React from 'react'

const AvatarImage = ({ url, ...restProps }) => {
	return (
		<View>
			<Image source={url} {...restProps} />
		</View>
	)
}

export default AvatarImage
