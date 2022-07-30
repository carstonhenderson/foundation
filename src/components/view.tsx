import { FC, ReactElement, ReactNode, cloneElement, isValidElement, CSSProperties } from 'react'
import { Sizes } from '../types'

interface InternalProps {
	children: ReactNode
}

export interface ViewProps {
	spaceAbove?: Sizes
	spaceBelow?: Sizes
	spaceLeft?: Sizes
	spaceRight?: Sizes
	bg?: (string & {}) | 'white' | 'black' | 'green' | 'blue' | 'purple' | 'none'
	rounded?: boolean
	maxWidth?: 'screen-md' | 'screen-lg' | 'screen-xl' | 'none'
}

/**
 * Renders an element, giving it access to various layout properties.
 * @param {ReactNode} children -
 * @param {string} [spaceAbove] -
 * @param {string} [spaceBelow] -
 * @param {string} [spaceLeft] -
 * @param {string} [spaceRight] -
 * @param {string} [bg] - the color/image to give the background - can either be a property of `bgClasses` or a path to an image.
 */
let View: FC<InternalProps & ViewProps> = ({
	children,
	spaceAbove = 'none',
	spaceBelow = 'none',
	spaceLeft = 'none',
	spaceRight = 'none',
	bg = 'none',
	rounded = false,
	maxWidth = 'none'
}): ReactElement => {
	let spaceAboveClasses = {
		none: '',
		sm: 'mt-2',
		md: 'mt-4',
		lg: 'mt-8'
	}

	let spaceBelowClasses = {
		none: '',
		sm: 'mb-2',
		md: 'mb-4',
		lg: 'mb-8'
	}

	let spaceLeftClasses = {
		none: '',
		sm: 'ml-2',
		md: 'ml-4',
		lg: 'ml-8'
	}

	let spaceRightClasses = {
		none: '',
		sm: 'mr-2',
		md: 'mr-4',
		lg: 'mr-8'
	}

	let maxWidthClasses = {
		'screen-md': 'mx-auto max-w-screen-md',
		'screen-lg': 'mx-auto max-w-screen-lg',
		'screen-xl': 'mx-auto max-w-screen-xl',
		none: ''
	}

	let bgClasses: Record<string, string> = {
		none: '',
		white: 'bg-white',
		black: 'bg-black',
		green: 'bg-green-500',
		blue: 'bg-blue-500',
		purple: 'bg-purple-500'
	}

	let roundedClass = rounded ? 'rounded' : ''

	let spaceClasses = `${spaceAboveClasses[spaceAbove]} ${spaceBelowClasses[spaceBelow]} ${spaceLeftClasses[spaceLeft]} ${spaceRightClasses[spaceRight]}`

	// Arbitrary properties need to be used for setting responsive background images because the URLs vary.
	// Since Tailwind does not compile code before scanning for classes, dynamic strings can't be parsed -
	// using custom CSS properties solves this by giving dynamic URLs a static name.
	// ------------------------------------------------------------------------------------------------------------
	let bgIsImage = !(`${bg}` in bgClasses)
	let bgImageCSSProp = bgIsImage && ({ '--bg-image': `url('${bg}')` } as CSSProperties)
	let bgImageClass = bgIsImage && '[background-image:var(--bg-image)]'
	// ------------------------------------------------------------------------------------------------------------

	if (isValidElement(children)) {
		return cloneElement(children, {
			...children.props,
			...(bgIsImage && { style: bgImageCSSProp }),
			className: `${children.props.className || ''} ${spaceClasses} ${bgIsImage ? `${bgImageClass} bg-cover` : bgClasses[bg]} ${roundedClass} ${
				maxWidthClasses[maxWidth]
			}`
		})
	} else {
		return <></>
	}
}

export default View
