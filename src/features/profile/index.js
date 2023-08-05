import { View, ScrollView, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { COLORS, DEVICE, Images } from '../../../constants'
import AvatarImage from '../../components/AvatarImage'
import TouchableButton from '../../components/TouchableButton'
import TextComponent from '../../components/TextComponent'
import UserInfo from './UserInfo'
import SliderItem from './SliderItem'
import TabbedButton from '../../components/TabbedButton'
import HeaderTop from '../../components/HeaderTop'
import SafeArea from '../../components/SafeArea'

const DATA = [
	{
		id: 1,
		type: 'video',
	},
	{
		id: 2,
		type: 'recipe',
	},
]

const Index = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(1)
	const ref = useRef()

	useEffect(() => {
		const offset = currentSlideIndex * DEVICE.width
		ref?.current.scrollToOffset({ offset })
	}, [])

	const updateCurrentSlideIndex = e => {
		const contentOffsetX = e.nativeEvent.contentOffset.x
		const currentIndex = Math.round(contentOffsetX / DEVICE.width)
		setCurrentSlideIndex(currentIndex)
	}

	const selectSlide = index => {
		const nextSlideIndex = index
		const offset = nextSlideIndex * DEVICE.width
		ref?.current.scrollToOffset({ offset })
		setCurrentSlideIndex(index)
	}

	return (
		<SafeArea>
			<ScrollView>
				<HeaderTop title="My profile" iconName="more-horizontal" />
				<View className="mx-5 mt-8">
					{/* user photo */}
					<View className="flex-row justify-between items-center">
						<AvatarImage
							url={Images.user1}
							className="h-[100px] w-[100px] rounded-full"
						/>
						<TouchableButton
							className="px-4 py-2 border rounded-[10px]"
							style={{
								borderColor: COLORS.primary50,
							}}
						>
							<TextComponent
								type="h4"
								customStyle={{ color: COLORS.primary50 }}
							>
								Edit profile
							</TextComponent>
						</TouchableButton>
					</View>

					{/* user name and description */}
					<View className="mt-4">
						<TextComponent type="h1">Alessandra Blair</TextComponent>
						<TextComponent
							type="h4"
							additionalClassName="font-poppins w-[80%] mt-3"
							customStyle={{ color: COLORS.neutral40 }}
						>
							Hello world I’m Alessandra Blair, I’m from Italy 🇮🇹 I love cooking
							so much!
						</TextComponent>
					</View>

					{/* user recipe details */}
					<View className="my-5 flex-row justify-between items-center">
						<UserInfo title="Recipe" value={3} />
						<UserInfo title="Videos" value={13} />
						<UserInfo title="Followers" value="14k" />
						<UserInfo title="Following" value="120" />
					</View>
				</View>

				{/* thick line */}
				<View
					style={{
						borderBottomColor: COLORS.neutral20,
						borderBottomWidth: StyleSheet.hairlineWidth,
					}}
				/>

				{/* video & recipe tabbed button*/}
				<View className="flex-row items-center mx-4 mt-3 mb-8 space-x-4">
					<View className="flex-1">
						<TabbedButton
							label="Video"
							index={0}
							currentSlideIndex={currentSlideIndex}
							onPress={() => selectSlide(0)}
						/>
					</View>
					<View className="flex-1">
						<TabbedButton
							label="Recipe"
							index={1}
							currentSlideIndex={currentSlideIndex}
							onPress={() => selectSlide(1)}
						/>
					</View>
				</View>

				{/* user recipe details */}
				<FlatList
					ref={ref}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					onMomentumScrollEnd={updateCurrentSlideIndex}
					data={DATA}
					contentContainerStyle={{
						paddingLeft: 20,
					}}
					renderItem={({ _, index }) => {
						return (
							<View
								style={{
									width: DEVICE.width * 0.9,
									marginRight: 20,
									marginBottom: 60,
								}}
							>
								<SliderItem index={index} />
							</View>
						)
					}}
					keyExtractor={item => item.id}
				/>
			</ScrollView>
		</SafeArea>
	)
}

export default Index
