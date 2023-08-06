import { Feather } from '@expo/vector-icons'

import TouchableButton from './TouchableButton'

const Icon = ({ name, size, color, ...restProps }) => {
	return (
		<TouchableButton {...restProps}>
			<Feather name={name} size={size} color={color} />
		</TouchableButton>
	)
}

export default Icon
