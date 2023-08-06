import { View } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInUp } from 'react-native-reanimated'

// internal imports
import TabbedButton from '../../components/TabbedButton'
import SafeArea from '../../components/SafeArea'
import TextComponent from '../../components/TextComponent'
import HeaderTop from '../../components/HeaderTop'
import NotificationMessage from '../../components/NotificationMessage'

const Index = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	return (
		<SafeArea>
			<HeaderTop title="Notifications" iconName="align-right" />

			<View className="mx-5">
				{/* tabbed buttons */}
				<View className="flex-row items-center mt-8 space-x-2">
					<View className="flex-1">
						<TabbedButton
							label="All"
							index={0}
							currentSlideIndex={currentSlideIndex}
							onPress={() => setCurrentSlideIndex(0)}
						/>
					</View>
					<View className="flex-1">
						<TabbedButton
							label="Unread"
							index={1}
							currentSlideIndex={currentSlideIndex}
							onPress={() => setCurrentSlideIndex(1)}
						/>
					</View>
					<View className="flex-1">
						<TabbedButton
							label="Read"
							index={2}
							currentSlideIndex={currentSlideIndex}
							onPress={() => setCurrentSlideIndex(2)}
						/>
					</View>
				</View>

				{/* today notification */}
				<View className="mt-6">
					<TextComponent type="h4">Today</TextComponent>
					<View className="space-y-3 mt-3">
						<Animated.View entering={FadeInUp.duration(600).delay(120)}>
							<NotificationMessage label="New recipe" mark={true} />
						</Animated.View>
						<Animated.View entering={FadeInUp.duration(600).delay(220)}>
							<NotificationMessage
								label="Don't forget to saved your recipe"
								mark={true}
							/>
						</Animated.View>
					</View>
				</View>

				{/* today notification */}
				<View className="mt-6">
					<TextComponent type="h4">Yesterday</TextComponent>
					<View className="space-y-3 mt-3">
						<Animated.View entering={FadeInUp.duration(600).delay(320)}>
							<NotificationMessage label="New recipe" />
						</Animated.View>
						<Animated.View entering={FadeInUp.duration(600).delay(420)}>
							<NotificationMessage label="Don't forget to saved your recipe" />
						</Animated.View>
					</View>
				</View>
			</View>
		</SafeArea>
	)
}

export default Index
