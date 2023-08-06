import { TextInput } from 'react-native'
import { useState } from 'react'
import { COLORS } from '../../constants'

const TextInputComponent = ({ ...restProps }) => {
	const [isFocused, setIsFocused] = useState(false)
	return (
		<TextInput
			{...restProps}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			className="px-4 py-3 border rounded-[10px] font-poppins text-[14px]"
			style={{
				borderColor: isFocused ? COLORS.primary50 : COLORS.neutral20,
				color: COLORS.neutral90,
			}}
		/>
	)
}

export default TextInputComponent
