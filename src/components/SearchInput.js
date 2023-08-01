import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import Icon from './Icon'

const SearchInput = ({ setQuery }) => {
	return (
		<View
			className="mx-5 flex-row items-center px-4 py-3 border rounded-[10px] mt-7"
			style={{
				borderColor: COLORS.neutral20,
			}}
		>
			<Icon name="search" size={20} color={COLORS.neutral20} />
			<TextInput
				placeholder="Search recipes"
				className="flex-1 ml-3"
				style={{
					color: COLORS.neutral30,
				}}
				onChangeText={setQuery}
			/>
		</View>
	)
}

export default SearchInput
