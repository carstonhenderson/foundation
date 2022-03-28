import { MouseEventHandler, ReactNode, ReactElement } from 'react'

interface ButtonProps {
	children: ReactNode
	className?: string
	color: 'emerald' | 'indigo' | 'red'
	onClick: MouseEventHandler<HTMLButtonElement>
}

/**
 * Renders a styled button that performs an action when pressed.
 * @param {ReactNode} children - the button element's children, usually a string.
 * @param {string} [className] - additional classes to give to the button element.
 * @param {string} color - the color theme to assign to the button.
 * @param {function} onClick - a callback to be fired when the button is clicked.
 */
let Button = ({ children, className = '', color, onClick }: ButtonProps): ReactElement => {
	let colors = {
		emerald: 'bg-emerald-500 hover:bg-emerald-400 focus:bg-emerald-400 active:bg-emerald-600',
		indigo: 'bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 active:bg-indigo-600',
		red: 'bg-red-500 hover:bg-red-400 focus:bg-red-400 active:bg-red-600'
	}

	return (
		<button
			className={`px-8 py-4 rounded-lg text-white shadow transition ease-in-out duration-75 hover:scale-105 focus:scale-105 active:scale-95 ${colors[color]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
