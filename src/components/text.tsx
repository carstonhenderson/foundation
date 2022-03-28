import { ReactElement, ReactNode } from 'react'
import View, { ViewProps } from './view'

interface TextProps {
	children: ReactNode
	className?: string
	as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	color?: 'black' | 'blue' | 'green' | 'purple' | 'red' | 'white' | 'custom'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '5xl'
	weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
	outline?: true
}

/**
 * Renders text.
 * @param {ReactNode} children - the text to be rendered, usually just a string.
 * @param {string} className - additional classes to give to the text elementvfc .
 * @param {string} as - the element to render the container as.
 * @param {string} color - the color of the text.
 * @param {string} size - the size of the text.
 * @param {string} weight - the weight of the text.
 * @param {boolean} outline - outlines the text - useful when contrast is needed between the text and the background.
 */
let Text = ({
	children,
	className = '',
	as = 'p',
	color = 'black',
	size = 'md',
	weight = 'normal',
	outline = undefined,
	...rest
}: TextProps & ViewProps): ReactElement => {
	let colorClasses = {
		custom: '',
		black: 'dark:text-white',
		blue: 'text-blue-500',
		green: 'text-green-500',
		purple: 'text-purple-500',
		red: 'text-red-500',
		white: 'text-white'
	}

	let sizeClasses = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-md',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl',
		'5xl': 'text-5xl'
	}

	let weightClasses = {
		light: 'font-light',
		normal: 'font-normal',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold'
	}

	let outlineClass = outline ? 'text-stroke' : ''

	let Element = as

	return (
		<View {...rest}>
			<Element className={`${colorClasses[color]} ${sizeClasses[size]} ${weightClasses[weight]} ${outlineClass} ${className}`}>{children}</Element>
		</View>
	)
}

export default Text
