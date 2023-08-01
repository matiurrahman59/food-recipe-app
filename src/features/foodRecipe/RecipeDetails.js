import { View, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import { COLORS } from '../../../constants'
import TextComponent from '../../components/TextComponent'
import AvatarImage from '../../components/AvatarImage'
import TouchableButton from '../../components/TouchableButton'
import { ingredientLists } from '../../../constants/data'

const RecipeDetails = ({ item }) => {
	return (
		<ScrollView className="flex-1" style={{ backgroundColor: COLORS.white }}>
			<View className="mx-5 mb-5">
				<TextComponent type="h1" additionalClassName="w-[90%]">
					{item.title}
				</TextComponent>
				<View className="space-y-4">
					{/* item video */}
					<View className="relative items-center justify-center">
						<AvatarImage
							url={item.image}
							resizeMode="contain"
							className="mt-6 w-full h-[200px] rounded-xl"
						/>
						<TouchableOpacity
							onPress={() => console.log('play video')}
							className="absolute h-12 w-12 items-center justify-center rounded-full"
							style={{
								backgroundColor: 'rgba(48, 48, 48, 0.30)',
							}}
						>
							<FontAwesome name="play" size={20} color={COLORS.white} />
						</TouchableOpacity>
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
						<View
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
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	)
}

export default RecipeDetails
