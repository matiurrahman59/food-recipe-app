import { View } from 'react-native'

import { COLORS } from '../../constants'
import TextComponent from './TextComponent'
import Icon from './Icon'

const NotificationMessage = ({ label, mark }) => {
	return (
		<View
			className="py-3 px-4 rounded-xl flex-row space-x-3"
			style={{ backgroundColor: COLORS.neutral10 }}
		>
			<View
				className="h-7 w-7 items-center justify-center rounded-full"
				style={{ backgroundColor: COLORS.green10 }}
			>
				<Icon name="save" size={16} color={COLORS.success100} />
			</View>
			<View className="flex-1">
				<TextComponent type="h5">{label}</TextComponent>
				<TextComponent
					additionalClassName="font-poppins text-xs mt-1"
					customStyle={{ color: COLORS.neutral40 }}
					numberOfLines={2}
				>
					New recipe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatibus accusamus earum possimus incidunt illo impedit?
				</TextComponent>
			</View>
			{mark && <View className="h-[6px] w-[6px] rounded-full bg-primary-50" />}
		</View>
	)
}

export default NotificationMessage
