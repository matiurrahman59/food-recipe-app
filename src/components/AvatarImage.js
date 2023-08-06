import { Image } from 'react-native'

const AvatarImage = ({ url, ...restProps }) => {
	return <Image source={url} {...restProps} />
}

export default AvatarImage
