import { ReactElement } from 'react'
import Space from './space'

let Divider = (): ReactElement => {
	return (
		<>
			<Space vertical size="xl" />
			<div className="w-full h-0.5 bg-neutral-300 rounded" />
			<Space vertical size="xl" />
		</>
	)
}

export default Divider
