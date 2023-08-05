import React from 'react'
import TouchableButton from './TouchableButton'
import TextComponent from './TextComponent'
import { COLORS } from '../../constants'

const TabbedButton = ({ label, index, currentSlideIndex, ...restProps }) => {
	return (
		<TouchableButton
			{...restProps}
			className="px-3 py-2 rounded-[10px] items-center"
			style={{
				backgroundColor:
					index === currentSlideIndex ? COLORS.primary50 : COLORS.white,
			}}
		>
			<TextComponent
				type="h5"
				customStyle={{
					color: index === currentSlideIndex ? COLORS.white : COLORS.primary30,
				}}
			>
				{label}
			</TextComponent>
		</TouchableButton>
	)
}

export default TabbedButton
