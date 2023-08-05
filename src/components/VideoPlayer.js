import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ResizeMode, Video } from 'expo-av'

const VideoPlayer = ({ videoUrl, videoRef }) => {
	const [status, setStatus] = useState({})
	console.log('--check--', status.isPlaying)
	console.log('--check--', status.didJustFinish)
	return (
		<Video
			ref={videoRef}
			source={{
				uri: videoUrl,
			}}
			useNativeControls
			resizeMode={ResizeMode.CONTAIN}
			onPlaybackStatusUpdate={setStatus}
			style={{
				width: '100%',
				height: '100%',
			}}
		/>
	)
}

export default VideoPlayer
