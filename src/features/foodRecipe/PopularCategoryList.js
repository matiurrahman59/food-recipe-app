import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'
import AvatarImage from '../../components/AvatarImage'
import TextComponent from '../../components/TextComponent'
import Icon from '../../components/Icon'

const PopularCategoryList = ({ item }) => {
	return (
		<TouchableOpacity
			className="w-[150px] mt-[70px] mr-4 pt-10 pb-3 rounded-xl relative"
			style={{ backgroundColor: COLORS.neutral10 }}
		>
			<View className="absolute -top-1/2 items-center left-0 right-0">
				<AvatarImage
					url={item.image}
					className="h-[110px] w-[110px] rounded-full"
				/>
			</View>
			<TextComponent type="h4" additionalClassName="text-center px-2">
				{item.title}
			</TextComponent>
			<View className="mt-[18px] px-3">
				<TextComponent type="base" customStyle={{ color: COLORS.neutral30 }}>
					{item.duration}
				</TextComponent>
				<View className="flex-row justify-between items-center">
					<TextComponent type="h5">10 Mins</TextComponent>
					<Icon
						name="bookmark"
						size={16}
						color={COLORS.neutral90}
						style={{ backgroundColor: COLORS.white }}
						className="h-7 w-7 items-center justify-center rounded-full"
					/>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default PopularCategoryList
