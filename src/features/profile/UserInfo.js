import { View } from 'react-native'

// internal imports
import TextComponent from '../../components/TextComponent'

const UserInfo = ({ title, value }) => {
	return (
		<View className="flex items-center">
			<TextComponent additionalClassName="font-poppins text-xs">
				{title}
			</TextComponent>
			<TextComponent type="h1">{value}</TextComponent>
		</View>
	)
}

export default UserInfo
