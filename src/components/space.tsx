import { ReactElement } from 'react'

// A `Direction` type must be made to ensure only one direction parameter is passed.
// --------------------------------------------------------------------------------------------------------------------
interface OnlyHorizontal {
	horizontal: true
	vertical?: never
}

interface OnlyVertical {
	horizontal?: never
	vertical: true
}

type Direction = OnlyHorizontal | OnlyVertical
// --------------------------------------------------------------------------------------------------------------------

interface SpaceProps {
	className?: string
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'dynamic'
}

/**
 * Renders empty space to separate components.
 * @param {string} [className] - additional classes to give to the div element.
 * @param {string} [size] - the amount of space to separate each element by.
 * @param {boolean} [horizontal] - grows the space horizontally.
 * * @param {boolean} [vertical] - grows the space vertically.
 */
let Space = ({ className = '', horizontal, vertical, size = 'dynamic' }: SpaceProps & Direction): ReactElement => {
	let marginClasses = {
		xs: horizontal ? 'w-1' : 'h-1',
		sm: horizontal ? 'w-2' : 'h-2',
		md: horizontal ? 'w-4' : 'h-4',
		lg: horizontal ? 'w-8' : 'h-8',
		xl: horizontal ? 'w-16' : 'h-16',
		dynamic: ''
	}

	return <div className={`${marginClasses[size]} ${className}`} aria-hidden />
}

export default Space
