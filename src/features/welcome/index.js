import { View, Image, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

// internal imports
import { Images } from '../../../constants'
import { COLORS } from '../../../constants'
import TextComponent from '../../components/TextComponent'

const index = () => {
	const navigation = useNavigation()
	return (
		<View className="flex-1 relative">
			<Image
				source={Images.onBoardingImage}
				className="absolute h-full w-full object-cover z-0"
			/>
			<LinearGradient
				colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
				className="absolute h-1/2 w-full bottom-0 z-10"
			/>
			<View className="pt-10 items-center">
				<View className="flex-row space-x-1 items-baseline">
					<View className="mr-2">
						<AntDesign name="star" size={16} color={COLORS.white} />
					</View>

					<Text
						className="font-poppinsBold text-base leading-[22.4px]"
						style={{ color: COLORS.white }}
					>
						60k+
					</Text>

					<Text
						className="font-poppins text-base"
						style={{ color: COLORS.white }}
					>
						Premium recipes
					</Text>
				</View>
			</View>

			<View className="absolute z-20 w-full h-1/2 bottom-0 items-center justify-center">
				<TextComponent
					type="bold"
					customStyle={{
						color: COLORS.white,
					}}
				>
					Let’s
				</TextComponent>
				<TextComponent
					type="bold"
					customStyle={{
						color: COLORS.white,
					}}
				>
					Cooking
				</TextComponent>

				<TextComponent
					type="base"
					additionalClassName="mt-6"
					customStyle={{
						color: COLORS.white,
					}}
				>
					Find best recipes for cooking
				</TextComponent>

				<TouchableOpacity
					onPress={() => navigation.navigate('Tab')}
					className="flex-row space-x-2 items-center px-8 py-4 rounded-[10px] font-poppins text-base mt-10"
					style={{
						backgroundColor: COLORS.primary50,
					}}
				>
					<TextComponent
						type="h3"
						customStyle={{
							color: COLORS.white,
						}}
					>
						Start cooking
					</TextComponent>
					<AntDesign name="arrowright" size={20} color={COLORS.white} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default index
