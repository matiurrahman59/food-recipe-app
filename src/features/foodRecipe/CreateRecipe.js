import { useRef, useState } from 'react'
import {
	ActivityIndicator,
	Image,
	Pressable,
	ScrollView,
	View,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Video, ResizeMode } from 'expo-av'
import * as VideoThumbnails from 'expo-video-thumbnails'
import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'

// internal imports
import SafeArea from '../../components/SafeArea'
import HeaderTop from '../../components/HeaderTop'
import { COLORS } from '../../../constants'
import Icon from '../../components/Icon'
import TextComponent from '../../components/TextComponent'
import TextInputComponent from '../../components/TextInputComponent'
import TouchableButton from '../../components/TouchableButton'

const CreateRecipe = () => {
	const [thumbnailImage, setThumbnailImage] = useState(null)
	const [showVideo, setShowVideo] = useState(null)
	const [videoUrl, setVideoUrl] = useState(null)
	const videoRef = useRef(null)
	const [title, setTitle] = useState('')
	const [count, setCount] = useState(1)
	const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }])
	const [loading, setLoading] = useState(null)

	const saveRecipeHandler = () => {
		setLoading(true)

		setTimeout(() => {
			const recipeDetails = {
				title,
				servePersonQuantity: count,
				cookTime: '45 min',
				videoUrl,
				ingredients,
			}
			setLoading(false)
			// console.log(recipeDetails)
		}, 2000)
	}

	const addNewIngredient = () => {
		setIngredients([...ingredients, { name: '', quantity: '' }])
	}

	const updateIngredient = (index, fieldName, value) => {
		const updatedIngredients = [...ingredients]
		updatedIngredients[index][fieldName] = value
		setIngredients(updatedIngredients)
	}

	const removeIngredient = index => {
		const updatedIngredients = [...ingredients]
		updatedIngredients.splice(index, 1)
		setIngredients(updatedIngredients)
	}

	const decreaseCount = () => {
		if (count < 2) return
		setCount(count => count - 1)
	}

	const playRecipeVideo = () => {
		setShowVideo(true)
		videoRef.current.setPositionAsync(0)
		videoRef.current.playAsync()
	}

	const generateThumbnail = async selectedVideoUrl => {
		try {
			const { uri } = await VideoThumbnails.getThumbnailAsync(selectedVideoUrl)
			setThumbnailImage(uri)
		} catch (e) {
			console.log(e)
		}
	}

	const pickVideo = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Videos,
			allowsEditing: true,
			aspect: [3, 4],
			quality: 1,
		})

		if (!result.canceled) {
			const selectedVideoUrl = result.assets[0].uri
			await generateThumbnail(selectedVideoUrl)
			setVideoUrl(selectedVideoUrl)
		}
	}

	return (
		<SafeArea>
			<ScrollView>
				<HeaderTop title="Create recipe" iconName="more-horizontal" />
				<View className="flex-1 mx-5">
					{/* video pick and play  */}
					<View className="relative mt-6 h-[200px]">
						{/* edit icon */}
						<View
							className="p-[6] rounded-full absolute right-2 top-2 z-50"
							style={{ backgroundColor: COLORS.white }}
						>
							<Icon
								onPress={pickVideo}
								name="edit-3"
								size={20}
								color={COLORS.primary50}
							/>
						</View>

						{/* empty video text */}
						{!videoUrl && (
							<View
								className="h-full bg-neutral-40 rounded-xl w-full items-center justify-center"
								style={{ backgroundColor: COLORS.neutral10 }}
							>
								<TextComponent
									type="h4"
									customStyle={{ color: COLORS.error10 }}
								>
									You didn't select any videos yet!
								</TextComponent>
							</View>
						)}

						{/* thumbnail image */}
						{videoUrl && (
							<Pressable
								onPress={playRecipeVideo}
								className={`h-full absolute w-full items-center justify-center ${
									showVideo ? '-z-10' : 'z-10'
								}`}
							>
								<Image
									source={{ uri: thumbnailImage }}
									resizeMode="contain"
									className="w-full h-full rounded-xl"
								/>
								<View
									className="absolute h-12 w-12 items-center justify-center rounded-full"
									style={{
										backgroundColor: 'rgba(48, 48, 48, 0.30)',
									}}
								>
									<FontAwesome name="play" size={20} color={COLORS.white} />
								</View>
							</Pressable>
						)}

						{/* video player */}
						<View className="h-full w-full absolute rounded-xl overflow-hidden">
							<Video
								ref={videoRef}
								source={{
									uri: videoUrl,
								}}
								useNativeControls
								resizeMode={ResizeMode.CONTAIN}
								onPlaybackStatusUpdate={playbackStatus => {
									playbackStatus.didJustFinish && setShowVideo(false)
								}}
								style={{
									width: '100%',
									height: '100%',
								}}
							/>
						</View>
					</View>

					{/* recipe title */}
					<View className="mt-5">
						<TextInputComponent
							onChangeText={setTitle}
							value={title}
							placeholder="Recipe title"
						/>
					</View>

					{/*serve person quantity */}
					<View
						className="rounded-xl px-4 py-3 mt-4 flex-row justify-between items-center"
						style={{ backgroundColor: COLORS.neutral10 }}
					>
						<View className="flex-row items-center">
							<View
								className="mr-4 p-2 rounded-full"
								style={{ backgroundColor: COLORS.white }}
							>
								<Icon name="users" size={20} color={COLORS.primary50} />
							</View>
							<TextComponent type="h3">Serves</TextComponent>
						</View>

						<View className="flex-row items-center justify-center gap-3.5">
							<Icon name="minus-circle" size={24} onPress={decreaseCount} />
							<TextComponent
								type="h4"
								customStyle={{ color: COLORS.neutral40 }}
							>
								{count.toLocaleString('en-us', {
									minimumIntegerDigits: 2,
									useGrouping: false,
								})}
							</TextComponent>
							<Icon
								name="plus-circle"
								size={24}
								onPress={() => setCount(count => count + 1)}
							/>
						</View>
					</View>

					{/* cook time */}
					<View
						className="rounded-xl px-4 py-3 mt-4 flex-row justify-between items-center"
						style={{ backgroundColor: COLORS.neutral10 }}
					>
						<View className="flex-row items-center">
							<View
								className="mr-4 p-2 rounded-full"
								style={{ backgroundColor: COLORS.white }}
							>
								<Icon name="clock" size={20} color={COLORS.primary50} />
							</View>
							<TextComponent type="h3">Cook time</TextComponent>
						</View>

						<TextComponent customStyle={{ color: COLORS.neutral40 }}>
							45 min
						</TextComponent>
					</View>

					{/* ingredient */}
					<View className="mt-6">
						<TextComponent type="h2">Ingredients</TextComponent>

						{/* ingredient item */}
						<View className="space-y-4">
							{ingredients.map((ingredient, index) => (
								<View
									key={index}
									className="mt-4 flex-row items-center space-x-3"
								>
									<View className="w-1/2">
										<TextInputComponent
											placeholder="Item name"
											value={ingredient.name}
											onChangeText={value =>
												updateIngredient(index, 'name', value)
											}
										/>
									</View>
									<View className="flex-grow">
										<TextInputComponent
											placeholder="Quantity"
											value={ingredient.quantity}
											onChangeText={value =>
												updateIngredient(index, 'quantity', value)
											}
										/>
									</View>
									<View>
										<Icon
											name="minus-circle"
											size={24}
											onPress={removeIngredient}
										/>
									</View>
								</View>
							))}
						</View>

						{/* add new ingredient */}
						<TouchableButton
							onPress={addNewIngredient}
							className="mt-5 flex-row items-center"
						>
							<View className="mr-1">
								<Feather name="plus" size={24} color={COLORS.neutral90} />
							</View>

							<TextComponent type="h3">Add new Ingredients</TextComponent>
						</TouchableButton>
					</View>
				</View>

				{/* save recipe button */}
				<View
					className="shadow-xl mt-6 px-5"
					style={{ marginBottom: 80, elevation: 8 }}
				>
					<Pressable
						onPress={saveRecipeHandler}
						disabled={loading}
						className="py-4 items-center justify-center rounded-[10px]"
						style={{
							backgroundColor: loading ? COLORS.primary30 : COLORS.primary50,
						}}
					>
						{loading ? (
							<ActivityIndicator color={COLORS.white} />
						) : (
							<TextComponent type="h3" customStyle={{ color: COLORS.white }}>
								Save my recipes
							</TextComponent>
						)}
					</Pressable>
				</View>
			</ScrollView>
		</SafeArea>
	)
}

export default CreateRecipe
