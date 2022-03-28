import { ReactElement, ReactNode } from 'react'

interface InsetProps {
	children: ReactNode
	className?: string
	horizontal?: true
	space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'base'
}

/**
 * Insets its children via padding.
 * @param {ReactNode} children - the elements to be inset.
 * @param {string} [className] - additional classes to give to the containing div element.
 * @param {string} space - the amount of space to inset.
 */
let Inset = ({ children, className = '', horizontal, space = 'md' }: InsetProps): ReactElement => {
	let paddingClasses = {
		xs: horizontal ? 'px-1' : 'p-1',
		sm: horizontal ? 'px-2' : 'p-2',
		md: horizontal ? 'px-4' : 'p-4',
		lg: horizontal ? 'px-8' : 'p-8',
		xl: horizontal ? 'px-16' : 'p-16',
		'2xl': horizontal ? 'px-32' : 'p-32',
		'3xl': horizontal ? 'px-64' : 'p-64',
		base: horizontal ? 'w-full max-w-screen-xl mx-auto px-4 md:px-8' : 'w-full max-w-screen-xl mx-auto p-4 md:p-8'
	}

	return <div className={`${paddingClasses[space]} ${className}`}>{children}</div>
}

export default Inset
