import { ReactElement, ReactNode, ElementType, cloneElement, isValidElement } from 'react'
import View, { ViewProps } from './view'

// A `Direction` type must be made to ensure only one direction property is passed.
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

interface StackProps {
	children: ReactNode[]
	className?: string
	as?: ElementType
	fill?: true
	stretch?: true
	space?: 'none' | 'sm' | 'md' | 'lg'
	justify?: 'none' | 'between' | 'center' | 'start' | 'end'
	align?: 'none' | 'center' | 'start' | 'end'
}

/**
 * Arranges and positions elements along the specified axis.
 * @param {ReactNode[]} children - the elements to be arranged.
 * @param {string} [className] - additional classes to give to the ccontainer.
 * @param {ElementType} [as] - the element to render the container as.
 * @param {boolean} [horizontal] - arranges elements horizontally.
 * @param {boolean} [vertical] - arranges elements vertically.
 * @param {boolean} [fill] - evenly sizes each element to fill the container's main axis.
 * @param {boolean} [stretch] - stretches each element to fill the container's cross axis.
 * @param {string} [space] - the amount of space to separate each element by.
 * @param {string} [justify] - positions elements along the main axis.
 * @param {string} [align] - positions elements along the cross axis.
 */
let Stack = ({
	children,
	className = '',
	as = 'div',
	horizontal,
	vertical,
	fill,
	stretch,
	space = 'md',
	justify = 'none',
	align = 'none',
	...rest
}: StackProps & Direction & ViewProps): ReactElement => {
	let spaceClasses = {
		none: horizontal ? 'gap-x-0' : 'gap-y-0',
		sm: horizontal ? 'gap-x-2' : 'gap-y-2',
		md: horizontal ? 'gap-x-4' : 'gap-y-4',
		lg: horizontal ? 'gap-x-8' : 'gap-y-8'
	}

	let justifyClasses = {
		none: '',
		between: 'justify-between',
		center: 'justify-center',
		start: 'justify-start',
		end: 'justify-end'
	}

	let alignClasses = {
		none: '',
		center: 'items-center',
		start: 'items-start',
		end: 'items-end'
	}

	let stretchClass = stretch ? 'h-full items-stretch' : ''

	let directionClass = vertical ? 'flex-col' : ''

	let Element = as

	return (
		<View {...rest}>
			<Element className={`flex ${directionClass} ${spaceClasses[space]} ${justifyClasses[justify]} ${alignClasses[align]} ${stretchClass} ${className}`}>
				{children.map((child, i) => {
					if (fill) {
						if (isValidElement(child)) {
							return cloneElement(child, { className: (child.props.className || '') + ' flex-1', key: i })
						}
					} else {
						return child
					}
				})}
			</Element>
		</View>
	)
}

export default Stack
