import { TouchableOpacity } from 'react-native'

const TouchableButton = ({ children, ...restProps }) => {
	return <TouchableOpacity {...restProps}>{children}</TouchableOpacity>
}

export default TouchableButton
