import { ReactElement, ReactNode } from 'react'
import View, { ViewProps } from './view'

interface TextProps {
	children?: ReactNode[]
	className?: string
	height?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
	width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

/**
 * Renders an empty box.
 * @param {ReactNode[]} [children] - the contents, if any, of the box.
 * @param {string} [className] - additional classes to give to the div element.
 * @param {string} [height] - the height of the box.
 * @param {string} [width] - the width of the box.
 */
let Box = ({ children, className = '', height = 'md', width = 'md', ...rest }: TextProps & ViewProps): ReactElement => {
	let heightClasses = {
		xs: 'h-2',
		sm: 'h-4',
		md: 'h-8',
		lg: 'h-16',
		xl: 'h-32',
		full: 'h-full'
	}

	let widthClasses = {
		xs: 'w-2',
		sm: 'w-4',
		md: 'w-8',
		lg: 'w-16',
		xl: 'w-32',
		full: 'w-full'
	}

	return (
		<View {...rest}>
			<div className={`${heightClasses[height]} ${widthClasses[width]} ${className}`}>{children}</div>
		</View>
	)
}

export default Box
