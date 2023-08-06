import { Text } from 'react-native'
import { COLORS } from '../../constants'

const TextComponent = ({
	children,
	type,
	customStyle,
	additionalClassName,
	...restProps
}) => {
	const base = 'font-poppins text-base'
	const bold = 'font-poppinsBold text-[56px] leading-[67px]'
	const sm = 'font-poppins text-[10px]'

	const h1 = 'font-poppinsBold text-2xl leading-[28.8px]'
	const h2 = 'font-poppinsBold text-xl'
	const h3 = 'font-poppinsBold text-base leading-[22.4px]'
	const h4 = 'font-poppinsBold text-[14px] leading-[19.6px]'
	const h5 = 'font-poppinsBold text-xs'

	const styles = {
		base,
		bold,
		sm,
		h1,
		h2,
		h3,
		h4,
		h5,
	}

	return (
		<Text
			className={`${styles[type]}  ${additionalClassName}`}
			style={[
				{
					color: COLORS.neutral90,
				},
				customStyle,
			]}
			{...restProps}
		>
			{children}
		</Text>
	)
}

export default TextComponent
