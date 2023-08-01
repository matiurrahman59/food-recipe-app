import { View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import SafeArea from '../../components/SafeArea'
import HeadingText from '../../components/HeadingText'
import SectionHeader from '../../components/SectionHeader'
import TextComponent from '../../components/TextComponent'
import {
	popularCreators,
	categoryList,
	popularCategory,
	recentRecipes,
	trendingRecipes,
} from '../../../constants/data'
import { COLORS } from '../../../constants'
import PopularCategoryList from './PopularCategoryList'
import PopularCreatorList from './PopularCreatorList'
import RecentRecipeList from './RecentRecipeList'
import TrendingRecipeList from './TrendingRecipeList'
import SearchInput from '../../components/SearchInput'

const Index = () => {
	const [activeCategory, setActiveCategory] = useState(2)
	const [query, setQuery] = useState('')

	return (
		<SafeArea>
			<ScrollView className="mb-12 ">
				<HeadingText>Find best recipes for cooking</HeadingText>

				{/* search bar */}
				<SearchInput setQuery={setQuery} />

				{/* Trending recipe section */}
				<View className="mt-5">
					<SectionHeader label="Trending now 🔥" button={true} />
					<View className="mt-4">
						<TrendingRecipeList data={trendingRecipes} />
					</View>
				</View>

				{/* Popular recipe section */}
				<View className="pt-6">
					<SectionHeader label="Popular category" />
					<View className="mt-4 space-x-3">
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

					<PopularCategoryList data={popularCategory} />
				</View>

				{/* Recent recipe section */}
				<View className="mt-6">
					<SectionHeader label="Recent recipe" button={true} />
					<View className="mt-4">
						<RecentRecipeList data={recentRecipes} />
					</View>
				</View>

				{/* Popular creator section */}
				<View className="mt-6">
					<SectionHeader label="Popular creators" button={true} />
					<View className="mt-4">
						<PopularCreatorList data={popularCreators} />
					</View>
				</View>
			</ScrollView>
		</SafeArea>
	)
}

export default Index
