import { View, Text, FlatList } from 'react-native'
import React from 'react'

const CustomFlatList = ({ data, renderItem, ...otherProps }) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={data}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			{...otherProps}
		/>
	)
}

export default CustomFlatList
