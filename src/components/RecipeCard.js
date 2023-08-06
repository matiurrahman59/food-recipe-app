import { View, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import AvatarImage from './AvatarImage'
import Rating from './Rating'
import Icon from './Icon'
import { COLORS } from '../../constants'
import TextComponent from './TextComponent'
import BookmarkButton from './BookmarkButton'

const RecipeCard = ({ item, ...restProps }) => {
	return (
		<TouchableOpacity {...restProps}>
			<View className="relative items-center justify-center">
				{/* <AvatarImage
					url={item.image}
					resizeMode="contain"
					className="w-full h-[180px] rounded-xl"
				/> */}
				<Image
					source={item.image}
					resizeMode="contain"
					className="w-full h-[180px] rounded-xl"
				/>

				{/* recipe rating */}
				<Rating rating={item.rating} />

				{/* bookmark icon */}
				<BookmarkButton recipe={item} />

				{/* video duration */}
				<View
					className="px-2 py-1 rounded-lg absolute bottom-2 right-2"
					style={{
						backgroundColor: 'rgba(48, 48, 48, 0.30)',
					}}
				>
					<TextComponent
						type="base"
						additionalClassName="text-xs"
						customStyle={{ color: COLORS.white }}
					>
						{item.duration}
					</TextComponent>
				</View>

				{/* video play button */}
				<View
					className="absolute h-12 w-12 items-center justify-center rounded-full"
					style={{
						backgroundColor: 'rgba(48, 48, 48, 0.30)',
					}}
				>
					<FontAwesome name="play" size={20} color={COLORS.white} />
				</View>
			</View>

			{/* recipe title */}
			<View className="flex-row justify-between items-center mt-3">
				<TextComponent type="h3">{item.title}</TextComponent>
				<Icon name="more-horizontal" size={20} color={COLORS.neutral90} />
			</View>

			{/* recipe creator */}
			<View className="flex-row items-center mt-2">
				<AvatarImage url={item.authorImage} className="h-8 w-8 mr-2" />
				<TextComponent type="sm" customStyle={{ color: COLORS.neutral40 }}>
					{item.author}
				</TextComponent>
			</View>
		</TouchableOpacity>
	)
}

export default RecipeCard
