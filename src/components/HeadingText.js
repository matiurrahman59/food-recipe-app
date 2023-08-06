import { View } from 'react-native'
import TextComponent from './TextComponent'

const HeadingText = ({ children, ...restProps }) => {
	return (
		<View className="pt-5 pl-[22px] max-w-[244px]">
			<TextComponent type="h1" {...restProps}>
				{children}
			</TextComponent>
		</View>
	)
}

export default HeadingText
