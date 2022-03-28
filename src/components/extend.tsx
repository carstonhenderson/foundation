import { ReactElement, ReactNode } from 'react'

interface ExtendProps {
	children: ReactNode
	className?: string
	space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'screen'
	horizontal?: true
}

/**
 * Extends its children outside of their parent element.
 * @param {ReactNode} children - the elements to be extended.
 * @param {string} className - additional classes to give to the containing div element.
 * @param {string} space - the amount of space to extend by.
 * @param {boolean} horizontal - extends the elements only horizontally.
 */
let Extend = ({ children, className = '', horizontal, space = 'md' }: ExtendProps): ReactElement => {
	let marginClasses = {
		xs: horizontal ? '-mx-1' : '-m-1',
		sm: horizontal ? '-mx-2' : '-m-2',
		md: horizontal ? '-mx-4' : '-m-4',
		lg: horizontal ? '-mx-8' : '-m-8',
		xl: horizontal ? '-mx-16' : '-m-16',
		'2xl': horizontal ? '-mx-32' : '-m-32',
		'3xl': horizontal ? '-mx-64' : '-m-64',
		screen: horizontal ? 'w-screen' : 'w-screen h-screen'
	}
	return <div className={`${marginClasses[space]} ${className}`}>{children}</div>
}

export default Extend
