import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SafeArea from '../../components/SafeArea'
import HeadingText from '../../components/HeadingText'
import SectionHeader from '../../components/SectionHeader'
import AvatarImage from '../../components/AvatarImage'
import TextComponent from '../../components/TextComponent'
import {
	popularCreators,
	categoryList,
	popularCategory,
} from '../../../constants/data'
import { COLORS, Images } from '../../../constants'
import Icon from '../../components/Icon'
import CustomFlatList from '../../components/CustomFlatList'
import PopularCategoryList from './PopularCategoryList'
import PopularCreatorList from './PopularCreatorList'

const Index = () => {
	const [activeCategory, setActiveCategory] = useState(2)

	return (
		<SafeArea>
			<HeadingText>Find best recipes for cooking</HeadingText>

			{/* Popular category section */}
			<View className="pt-6">
				<SectionHeader label="Popular category" />

				{/*popular category list */}
				<View className="mt-4 flex-row space-x-3">
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{
							paddingLeft: 20,
						}}
						data={categoryList}
						renderItem={({ item }) => {
							const isActive = item.id === activeCategory
							return (
								<TouchableOpacity
									onPress={() => setActiveCategory(item.id)}
									className="py-2 px-3 mr-2 rounded-[10px]"
									style={{
										backgroundColor: isActive
											? COLORS.primary50
											: 'transparent',
									}}
								>
									<TextComponent
										type="h5"
										customStyle={{
											color: isActive ? COLORS.white : COLORS.primary30,
										}}
									>
										{item.title}
									</TextComponent>
								</TouchableOpacity>
							)
						}}
					/>
				</View>

				{/*popular category recipe*/}

				<CustomFlatList
					data={popularCategory}
					renderItem={PopularCategoryList}
					contentContainerStyle={{
						paddingLeft: 20,
					}}
				/>
			</View>

			{/* Popular creator section */}
			<View className="mt-6">
				<SectionHeader label="Popular creators" button={true} />
				<View className="mt-4 flex-row space-x-3">
					<CustomFlatList
						data={popularCreators}
						renderItem={PopularCreatorList}
						contentContainerStyle={{
							paddingLeft: 20,
						}}
					/>
				</View>
			</View>
		</SafeArea>
	)
}

export default Index
