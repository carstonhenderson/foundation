import { ReactElement, CSSProperties } from 'react'
import View, { ViewProps } from './view'
import Stack from './stack'
import Space from './space'

// `reverse` can only be passed when an image is given.
// --------------------------------------------------------------------------------------------------------------------
type WithImageProps =
	| {
			withImage?: false
			reverse?: never
	  }
	| {
			withImage: string
			reverse?: true
	  }
// --------------------------------------------------------------------------------------------------------------------

interface ContentProps {
	children: React.ReactNode
	className?: string
	withBackground?: string
}

/**
 * Renders content with responsive default spacing.
 * @param {ReactNode[]} children - the elements within the container.
 * @param {string} [className] - additional classes to give to the container.
 * @param {string} [withImage] - splits the content in half, extending the given image to the edge of the screen.
 * @param {boolean} [reverse] - reverses the split content - `withImage` must be passed.
 * @param {string} [withBackground] - adds the given image as a screen-width background to the container.
 */
let Content = ({ children, className = '', withImage, reverse, withBackground, ...rest }: ContentProps & WithImageProps & ViewProps): ReactElement => {
	if (withImage) {
		return (
			<View {...rest}>
				<div className="w-full max-w-screen-xl mx-auto">
					<Stack horizontal fill space="none" className={`relative ${reverse ? ' flex-row-reverse' : ''}`}>
						<div>
							<div className="px-4 md:px-8 py-4 md:py-8">{children}</div>
						</div>

						<Space horizontal className="hidden md:block" />

						<div className={` md:block absolute ${reverse ? 'right-1/2' : 'left-1/2'} w-[50vw] h-full`}>
							<img src={withImage} className="hidden md:block w-full h-full object-cover" />
						</div>
					</Stack>
				</div>
			</View>
		)
	} else if (withBackground) {
		// Arbitrary properties need to be used for setting responsive background images because the URLs vary.
		// Since Tailwind does not compile code before scanning for classes, dynamic strings can't be parsed -
		// using custom CSS properties solves this by giving dynamic URLs a static name.
		// ------------------------------------------------------------------------------------------------------------
		let background = { '--bg-image': `url('${withBackground}')` } as CSSProperties
		let bgClass = '[background-image:var(--bg-image)]'
		// ------------------------------------------------------------------------------------------------------------

		return (
			<div style={background} className={`bg-cover bg-no-repeat ${bgClass} ${className}`}>
				<div className="w-full max-w-screen-xl mx-auto p-4 md:p-8">{children}</div>
			</div>
		)
	} else {
		return <div className={`w-full max-w-screen-xl mx-auto px-4 md:px-8 py-4 md:py-8 ${className}`}>{children}</div>
	}
}

export default Content
