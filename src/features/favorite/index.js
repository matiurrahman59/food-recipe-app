import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'

import SafeArea from '../../components/SafeArea'
import HeaderTop from '../../components/HeaderTop'
import TabbedButton from '../../components/TabbedButton'
import { trendingRecipes } from '../../../constants/data'
import RecipeCard from '../../components/RecipeCard'

const Index = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	return (
		<SafeArea>
			<ScrollView>
				<HeaderTop title="Saved recipes" />

				<View className="mx-5" style={{ marginBottom: 60 }}>
					{/* video & recipe tabbed button*/}
					<View className="flex-row items-center mt-8 mb-6 space-x-4">
						<View className="flex-1">
							<TabbedButton
								label="Video"
								index={0}
								currentSlideIndex={currentSlideIndex}
								onPress={() => setCurrentSlideIndex(0)}
							/>
						</View>
						<View className="flex-1">
							<TabbedButton
								label="Recipe"
								index={1}
								currentSlideIndex={currentSlideIndex}
								onPress={() => setCurrentSlideIndex(1)}
							/>
						</View>
					</View>

					{/* bookmark recipe items */}
					{trendingRecipes.map(item => (
						<View key={item.id}>
							<RecipeCard item={item} className="w-full mb-3" />
						</View>
					))}
				</View>
			</ScrollView>
		</SafeArea>
	)
}

export default Index
