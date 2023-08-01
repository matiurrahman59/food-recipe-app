import { View, Image } from 'react-native'
import React from 'react'

const AvatarImage = ({ url, ...restProps }) => {
	return <Image source={url} {...restProps} />
}

export default AvatarImage
