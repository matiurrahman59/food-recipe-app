import { View, ScrollView, Pressable } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRef, useState } from 'react'
import { Video, ResizeMode } from 'expo-av'
import Animated, { FadeInUp } from 'react-native-reanimated'

// internal imports
import { VIDEO_URL } from '@env'
import { COLORS } from '../../../constants'
import TextComponent from '../../components/TextComponent'
import AvatarImage from '../../components/AvatarImage'
import TouchableButton from '../../components/TouchableButton'
import { ingredientLists } from '../../../constants/data'

const RecipeDetails = ({ item }) => {
	const [showVideo, setShowVideo] = useState(null)
	const videoRef = useRef(null)

	const playRecipeVideo = () => {
		setShowVideo(true)
		videoRef.current.playAsync()
	}

	return (
		<ScrollView className="flex-1" style={{ backgroundColor: COLORS.white }}>
			<View className="mx-5 mb-5">
				{/* recipe title */}
				<TextComponent type="h1" additionalClassName="w-[90%]">
					{item.title}
				</TextComponent>

				{/* recipe video container */}
				<View className="space-y-4">
					<View className="relative mt-6 h-[200px]">
						{/* Video thumbnail */}
						<Pressable
							onPress={playRecipeVideo}
							className={`h-full absolute w-full items-center justify-center ${
								showVideo ? '-z-10' : 'z-10'
							}`}
						>
							<AvatarImage
								url={item.image}
								resizeMode="contain"
								className="w-full h-full rounded-xl"
							/>
							<View
								className="absolute h-12 w-12 items-center justify-center rounded-full"
								style={{
									backgroundColor: 'rgba(48, 48, 48, 0.30)',
								}}
							>
								<FontAwesome name="play" size={20} color={COLORS.white} />
							</View>
						</Pressable>

						{/* Video player */}
						<View className="h-full w-full absolute rounded-xl overflow-hidden">
							<Video
								ref={videoRef}
								source={{
									uri: VIDEO_URL,
								}}
								style={{
									width: '100%',
									height: '100%',
								}}
								useNativeControls
								resizeMode={ResizeMode.CONTAIN}
							/>
						</View>
					</View>

					{/*item rating */}
					<View className="flex-row items-center">
						<View>
							<FontAwesome name="star" size={16} color={COLORS.rating100} />
						</View>
						<View className="ml-1">
							<TextComponent type="h4">{item.rating}</TextComponent>
						</View>
						<View className="ml-2">
							<TextComponent
								type="h4"
								additionalClassName="font-poppins"
								customStyle={{ color: COLORS.neutral40 }}
							>
								(300 Reviews)
							</TextComponent>
						</View>
					</View>

					{/* author profile */}
					<View className="flex-row justify-between items-center">
						<View className="flex-row items-center space-x-[10px]">
							<AvatarImage
								url={item.authorImage}
								className="h-10 w-10 rounded-full"
							/>
							<View>
								<TextComponent
									type="h3"
									customStyle={{ color: COLORS.neutral100 }}
								>
									{item.author}
								</TextComponent>
								<View className="flex-row items-center">
									<MaterialCommunityIcons
										name="map-marker"
										size={16}
										color={COLORS.primary50}
									/>
									<TextComponent
										type="h4"
										additionalClassName="font-poppins ml-1"
										customStyle={{ color: COLORS.neutral40 }}
									>
										Bali, Indonesia
									</TextComponent>
								</View>
							</View>
						</View>

						<View>
							<TouchableButton
								className="px-4 py-2 rounded-[10px]"
								style={{ backgroundColor: COLORS.primary50 }}
							>
								<TextComponent type="h4" customStyle={{ color: COLORS.white }}>
									Follow
								</TextComponent>
							</TouchableButton>
						</View>
					</View>
				</View>

				{/* ingredients */}
				<View className="mt-[26px] flex-row justify-between items-center">
					<TextComponent type="h2">Ingredients</TextComponent>
					<TextComponent
						type="h4"
						additionalClassName="font-poppins"
						customStyle={{ color: COLORS.neutral40 }}
					>
						5 items
					</TextComponent>
				</View>

				{/* ingredient details */}
				<View className="mt-4 space-y-3">
					{ingredientLists.map(item => (
						<Animated.View
							entering={FadeInUp.duration(600).delay(item.id * 200)}
							key={item.id}
							className="rounded-xl px-4 py-3 flex-row justify-between items-center"
							style={{ backgroundColor: COLORS.neutral10 }}
						>
							<View className="flex-row items-center space-x-4">
								<View
									className="px-3 py-[10px] rounded-[10px]"
									style={{ backgroundColor: COLORS.white }}
								>
									<TextComponent additionalClassName="text-3xl">
										{item.icon}
									</TextComponent>
								</View>
								<View>
									<TextComponent type="h3">{item.name}</TextComponent>
								</View>
							</View>
							<TextComponent
								type="h4"
								additionalClassName="font-poppins"
								customStyle={{ color: COLORS.neutral40 }}
							>
								{item.quantity}
							</TextComponent>
						</Animated.View>
					))}
				</View>
			</View>
		</ScrollView>
	)
}

export default RecipeDetails
