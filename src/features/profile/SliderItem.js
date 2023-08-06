import { FlatList, View } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'

// internal imports
import { COLORS } from '../../../constants'
import AvatarImage from '../../components/AvatarImage'
import { trendingRecipes } from '../../../constants/data'
import Rating from '../../components/Rating'
import Icon from '../../components/Icon'
import TouchableButton from '../../components/TouchableButton'
import { LinearGradient } from 'expo-linear-gradient'
import TextComponent from '../../components/TextComponent'

const SliderItem = ({ index }) => {
	if (index == 1) {
		return (
			<View className="items-center mt-10 justify-center">
				<TextComponent type="h2" customStyle={{ color: COLORS.error10 }}>
					You don't have any videos!
				</TextComponent>
			</View>
		)
	}

	return (
		<View>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={trendingRecipes}
				renderItem={({ item }) => (
					<Animated.View
						key={item.id}
						entering={FadeInRight.duration(500).delay(item.id * 620)}
						className="relative mb-4 h-[200px] rounded-xl overflow-hidden"
					>
						<View>
							<AvatarImage
								url={item.image}
								resizeMode="contain"
								className="w-full h-full rounded-xl"
							/>

							<LinearGradient
								colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
								className="absolute bottom-0 h-1/2 w-full z-10 "
							/>
						</View>

						<Rating rating={item.rating} />
						<TouchableButton
							className="p-[6px] rounded-full absolute top-2 right-2 flex-row"
							style={{
								backgroundColor: COLORS.white,
							}}
						>
							<Icon name="more-horizontal" size={20} color={COLORS.primary50} />
						</TouchableButton>

						<View className="absolute left-4 bottom-4 w-[60%]">
							<TextComponent type="h3" customStyle={{ color: COLORS.white }}>
								{item.title}
							</TextComponent>
							<TextComponent
								additionalClassName="font-poppins text-xs mt-2"
								customStyle={{ color: COLORS.white }}
							>
								12 Ingredients | {item.duration}
							</TextComponent>
						</View>
					</Animated.View>
				)}
			/>
		</View>
	)
}

export default SliderItem
