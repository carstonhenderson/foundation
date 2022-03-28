import { ReactElement, ReactNode } from 'react'
import Text from './text'
import { ViewProps } from './view'

interface TextProps {
	children: ReactNode
	className?: string
	level?: '1' | '2' | '3' | '4' | '5' | '6'
	color?: 'black' | 'blue' | 'green' | 'purple' | 'red' | 'white' | 'custom'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '5xl'
	weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
}

/**
 * Renders text as a heading.
 * @param {ReactNode} children - the text to be rendered, usually just a string.
 * @param {string} className - additional classes to give to the heading element.
 * @param {string} level - the heading level to render as.
 * @param {string} color - the color of the heading.
 * @param {string} size - the size of the heading.
 * @param {string} weight - the weight of the heading.
 */
let Heading = ({ children, className = '', level = '1', color = 'black', size = '3xl', weight = 'normal', ...rest }: TextProps & ViewProps): ReactElement => {
	return (
		<Text as={`h${level}`} className={className} color={color} size={size} weight={weight} {...rest}>
			{children}
		</Text>
	)
}

export default Heading
