import Base from '../../components/base'
import Box from '../../components/box'
import Stack from '../../components/stack'
import Extend from '../../components/extend'
import Space from '../../components/space'
import Inset from '../../components/inset'
import Content from '../../components/content'
import Heading from '../../components/heading'
import Text from '../../components/text'
import Button from '../../components/button'
import Divider from '../../components/divider'
import halftoneBg from '../../assets/halftone-bg.jpg'
import { spacing } from '../../types'

let Layout = () => {
	console.log(spacing)
	return (
		<Inset className="w-full dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
			<Stack vertical maxWidth="screen-xl" space="sm" bg="red-500 md:red-400">
				<Heading size="3xl" spaceBelow="lg">
					Layout Components
				</Heading>

				<Heading level="2" size="2xl">
					View
				</Heading>
				<Text spaceBelow="md">Renders an element and gives it access to various layout properties.</Text>

				<Heading level="3" size="xl" spaceBelow="sm">
					Props
				</Heading>

				<Stack vertical as="ul" space="sm" spaceBelow="md">
					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">spaceAbove?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm"> sm | md | lg</code>
							<Text> - the amount of space to add above the element.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">spaceBelow?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm"> sm | md | lg</code>
							<Text> - the amount of space to add below the element.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">spaceLeft?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm"> sm | md | lg</code>
							<Text> - the amount of space to add to the left of the element.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">spaceRight?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm"> sm | md | lg</code>
							<Text> - the amount of space to add to the right of the element.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">background?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm"> white | black | green | blue | purple</code>
							<Text> - adds a background color to the element.</Text>
						</Stack>
					</li>
				</Stack>

				<Inset className="bg-gradient-to-r from-blue-300 to-sky-300 rounded">
					<Stack horizontal>
						<div className="border border-dashed border-purple-700 rounded h-16">
							<Box bg="purple" spaceRight="md" height="full" width="xl" className="rounded" />
						</div>

						<div className="border border-dashed border-blue-700 rounded h-full">
							<Box bg="blue" spaceBelow="md" height="lg" width="xl" className="rounded" />
						</div>

						<div className="border border-dashed border-green-700 rounded h-full">
							<Box bg="green" spaceAbove="md" spaceLeft="md" height="lg" width="xl" className="rounded" />
						</div>
					</Stack>
				</Inset>

				<Divider />

				<Heading level="2" size="2xl">
					Stack
				</Heading>
				<Text spaceBelow="md" spaceRight="sm">
					Arranges its children either vertically or horizontally.
				</Text>

				<Heading level="3" size="xl" spaceBelow="sm">
					Props
				</Heading>

				<Stack vertical as="ul" space="sm">
					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">horizontal?</code>
							<Text className="italic">string - </Text>
							<Text>arranges elements horizontally.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">vertical?</code>
							<Text className="italic">boolean - </Text>
							<Text>arranges elements vertically.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">space?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">
								none | sm | <span className="text-green-500">md</span> | lg
							</code>
							<Text> - the amount of space to separate each element by.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">fill?</code>
							<Text className="italic">boolean - </Text>
							<Text>evenly sizes each element to fill the container's main axis.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">stretch?</code>
							<Text className="italic">boolean - </Text>
							<Text>evenly sizes each element to fill the container's cross axis.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">justify?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">
								<span className="text-green-500">none</span> | between | center | start | end
							</code>
							<Text> - positions elements along the main axis.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">align?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">
								<span className="text-green-500">none</span> | center | start | end
							</code>
							<Text> - positions elements along the cross axis.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">as?</code>
							<Text className="italic">React.ElementType - </Text>
							<Text>the element to render the container as.</Text>
						</Stack>
					</li>
				</Stack>

				<Space vertical size="md" />

				<Heading level="3" size="xl">
					Horizontal
				</Heading>

				<Space vertical size="sm" />

				<Inset className="bg-gradient-to-r from-blue-300 to-sky-300 rounded">
					<Stack horizontal>
						<div className="bg-blue-500 w-32 h-16 rounded" />

						<div className="bg-blue-500 w-32 h-16 rounded" />

						<div className="bg-blue-500 w-32 h-16 rounded" />
					</Stack>
				</Inset>

				<Space vertical size="md" />

				<Heading level="3" size="xl">
					Vertical
				</Heading>

				<Space vertical size="sm" />

				<Inset className="bg-gradient-to-r from-blue-300 to-sky-300 rounded">
					<Stack vertical>
						<div className="bg-blue-500 h-16 rounded" />

						<div className="bg-blue-500 h-16 rounded" />

						<div className="bg-blue-500 h-16 rounded" />
					</Stack>
				</Inset>

				<Space vertical size="md" />

				<Heading level="3" size="xl">
					Fill
				</Heading>

				<Space vertical size="sm" />

				<Inset className="bg-gradient-to-r from-blue-300 to-sky-300 rounded">
					<Stack horizontal fill>
						<div className="bg-blue-500 h-16 rounded" />
						<div className="bg-blue-500 h-16 rounded" />
						<div className="bg-blue-500 h-16 rounded" />
					</Stack>
				</Inset>

				<Divider />

				<Heading level="2" size="2xl">
					Inset
				</Heading>
				<Text>Insets its children via padding.</Text>

				<Space vertical size="md" />

				<Heading level="3" size="xl">
					Props
				</Heading>

				<Space vertical size="sm" />

				<Stack vertical as="ul" space="sm">
					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">horizontal?</code>
							<Text className="italic">boolean - </Text>
							<Text>insets only horizontally.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">space?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">
								xs | sm | <span className="text-blue-500">md</span> | lg | xl | base
							</code>
							<Text> - the amount of space to inset.</Text>
						</Stack>
					</li>
				</Stack>

				<Space vertical size="md" />

				<Inset space="md" className="bg-gradient-to-r from-blue-300 to-sky-300 rounded">
					<Stack vertical>
						<div className="bg-blue-500 h-16 rounded" />

						<Inset horizontal>
							<div className="bg-blue-700 rounded h-16" />
						</Inset>

						<div className="bg-blue-500 h-16 rounded" />
					</Stack>
				</Inset>

				<Divider />

				<Heading level="2" size="2xl">
					Extend
				</Heading>
				<Text>Extends its children outside of their parent element.</Text>

				<Space vertical size="md" />

				<Heading level="3" size="xl">
					Props
				</Heading>

				<Space vertical size="sm" />

				<Stack vertical as="ul" space="sm">
					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">horizontal?</code>
							<Text className="italic">boolean - </Text>
							<Text>Extends only horizontally.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">space?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">
								xs | sm | <span className="text-purple-500">md</span> | lg | xl | screen
							</code>
							<Text> - the amount of space to extend.</Text>
						</Stack>
					</li>
				</Stack>

				<Space vertical size="md" />

				<Inset className="bg-purple-300 rounded">
					<Stack vertical>
						<div className="bg-purple-500 px-4 py-2 h-16 w-full rounded" />

						<Extend horizontal>
							<div className="h-16 bg-purple-700" />
						</Extend>

						<div className="bg-purple-500 px-4 py-2 h-16 w-full rounded" />
					</Stack>
				</Inset>

				<Divider />

				<Heading level="2" size="2xl">
					Space
				</Heading>
				<Text>Creates an empty element to separate components.</Text>

				<Space vertical size="md" />

				<Heading level="3" size="xl">
					Props
				</Heading>

				<Space vertical size="sm" />

				<Stack vertical as="ul" space="sm">
					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">horizontal?</code>
							<Text className="italic">boolean - </Text>
							<Text>grows the space horizontally.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">vertical?</code>
							<Text className="italic">boolean - </Text>
							<Text>grows the space vertically.</Text>
						</Stack>
					</li>

					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">space?</code>
							<Text className="italic">string - </Text>
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">
								xs | sm | md | lg | xl | <span className="text-cyan-500">dynamic</span>
							</code>
							<Text> - the amount of space to separate each element by.</Text>
						</Stack>
					</li>
				</Stack>

				<Space vertical size="md" />

				<Heading level="4" size="lg">
					Vertical
				</Heading>

				<Space vertical size="sm" />

				<Inset space="md" className="bg-cyan-300 rounded">
					<Stack vertical space="md">
						<div className="bg-cyan-500 h-16 rounded" />
						<Space vertical size="xl" className="border border-dashed border-cyan-700 rounded" />
						<div className="bg-cyan-500 h-16 rounded" />
					</Stack>
				</Inset>

				<Space vertical size="md" />

				<Heading level="4" size="lg">
					Horizontal
				</Heading>

				<Space vertical size="sm" />

				<Inset space="md" className="bg-cyan-300 rounded">
					<Stack horizontal fill>
						<div className="bg-cyan-500 h-16 rounded" />
						<Space horizontal className="border border-dashed border-cyan-700 rounded" />
						<div className="bg-cyan-500 h-16 rounded" />
					</Stack>
				</Inset>

				<Divider />

				<Heading level="2" size="2xl">
					Content
				</Heading>
				<Text>Gives standard responsive margins and padding to its content.</Text>

				<Space vertical size="md" />

				<Heading level="3" size="xl">
					Props
				</Heading>

				<Space vertical size="sm" />

				<ul className="flex flex-col gap-y-2">
					<li className="flex">
						<Stack horizontal space="sm">
							<code className="bg-neutral-700 px-2 py-1 rounded font-mono text-white text-sm">withBackground?</code>
							<Text className="italic">string - </Text>
							<Text>adds the given image as a screen-width background to the container.</Text>
						</Stack>
					</li>
				</ul>

				<Space vertical size="md" />

				<Heading level="4" size="lg">
					Default
				</Heading>

				<Space vertical size="sm" />

				<Content className="bg-blue-500 rounded shadow">
					<Stack vertical align="start">
						<Text>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
							animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
						</Text>

						<Text size="sm">
							{' '}
							Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
							fugiat quo voluptas nulla pariatur?
						</Text>

						<Button color="indigo" onClick={() => null}>
							Id est laborum
						</Button>
					</Stack>
				</Content>

				<Space vertical size="md" />

				<Heading level="4" size="lg">
					With background
				</Heading>

				<Space vertical size="sm" />

				<Inset bg={halftoneBg} rounded>
					<Stack horizontal fill space="none">
						<Stack vertical space="lg" align="start">
							<Heading level="2" size="3xl" color="white">
								Lorem ipsum...
							</Heading>

							<Text>
								At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
								dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
								mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
							</Text>

							<Text size="sm">
								{' '}
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur?
							</Text>

							<Button color="emerald" onClick={() => null}>
								Id est laborum
							</Button>
						</Stack>

						<Space horizontal className="hidden md:block" />
					</Stack>
				</Inset>
			</Stack>
		</Inset>
	)
}

export default Layout
