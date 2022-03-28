import React from 'react'

interface Props {
	children: React.ReactNode
	className?: string
}

/**
 * A base container component for the layout of a page.
 */
let Base = ({ children, className = '' }: Props) => {
	return <main className={`w-full dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 ${className}`}>{children}</main>
}

export default Base
