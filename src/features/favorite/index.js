import { View, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// internal imports
import SafeArea from '../../components/SafeArea'
import HeaderTop from '../../components/HeaderTop'
import TabbedButton from '../../components/TabbedButton'
import RecipeCard from '../../components/RecipeCard'
import { FavoritesContext } from '../../services/favorites/favoritesContext'
import TextComponent from '../../components/TextComponent'
import { COLORS } from '../../../constants'

const Index = () => {
	const navigation = useNavigation()
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

	const { favorites } = useContext(FavoritesContext)

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

					<View>
						{!favorites.length && (
							<View className="items-center mt-10 justify-center">
								<TextComponent
									type="h2"
									customStyle={{ color: COLORS.error10 }}
								>
									You don't have any favorites!
								</TextComponent>
							</View>
						)}
					</View>

					{/* bookmark recipe items */}
					{favorites.map(item => (
						<View key={item.id}>
							<RecipeCard
								item={item}
								className="w-full mb-3"
								onPress={() => navigation.navigate('RecipeDetails', item)}
							/>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeArea>
	)
}

export default Index
