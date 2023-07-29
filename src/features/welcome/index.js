import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'

// internal imports
import { Images } from '../../../constants'
import { COLORS } from '../../../constants'
import TextComponent from '../../components/TextComponent'

const index = () => {
	const navigation = useNavigation()
	return (
		<View className="flex-1 relative">
			<LinearGradient
				colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
				className="absolute h-1/2 w-full bottom-0 z-10"
			/>
			<Image
				source={Images.onBoardingImage}
				className="absolute h-full w-full object-cover z-0"
			/>
			<View className="pt-10 items-center">
				<View className="flex-row space-x-1 items-baseline">
					<AntDesign name="star" size={16} color={COLORS.white} />
					<TextComponent
						type="h3"
						additionalClassName="ml-2"
						customStyle={{
							color: COLORS.white,
						}}
					>
						60k+ {``}
					</TextComponent>
					<TextComponent
						type="base"
						customStyle={{
							color: COLORS.white,
						}}
					>
						Premium recipes
					</TextComponent>
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
