import { TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

const TextInputComponent = ({ ...restProps }) => {
	return (
		<TextInput
			{...restProps}
			className="px-4 py-3 border rounded-[10px] font-poppins text-[14px]"
			style={{ borderColor: COLORS.neutral20, color: COLORS.neutral90 }}
		/>
	)
}

export default TextInputComponent
