import React from 'react'
import Post from '../components/post'
import metadata from './meta/tabs-vs-spaces-my-two-cents'

const PostPage = () => (
	<Post {...metadata}>
		<h2>The Argument for Spaces</h2>
		<p>
			Tabs are inconsistent. You may see a tab as 2, 4, or 8 spaces by default
			depending on your editor, or something else if you change your settings.
			Different pepople will see your code in different ways unless they use the
			same configuration as you. Spaces, on the other hand, will always have the
			same width in characters. This has always been one of the primary
			arguments for using spaces. It is important that all developers are
			working with the same codebase, so it should appear the same.
		</p>
		<h2>Why Consistency is a Problem</h2>
		<p>
			Like most parts of code style, indentation style is subjective. This is
			true for a lot of things, but it usually isn&rsquo;t worth the effort to
			change them based on people&rsquo;s preferences, since the different
			options for stylization usually aren&rsquo;t very impactful. However,
			different indentation sizes may be preferred by a number of reasons.
			People with smaller screens may prefer the more compact 2-space
			indentation in order to fit all the code on their screen, while others may
			prefer 4-space indentation in order to see the indentation more clearly.
			These are both valid reasons and styles of indentation, among many others,
			and by using spaces, we are denying all but one of them. This would end up
			making our project less accessible to certain people, depending on what
			indentation style we end up choosing. This is where tabs come into play.
		</p>
		<h2>The Solution: Tabs</h2>
		<p>
			We may say that spaces are a more consistent across systems, but let us
			ask this&mdash;how important is consistent indentation really? Unless
			you&rsquo;re writing Python, your indentation does not matter to the
			compiler whatsoever. People seeing your code differently depending on
			their preferences is probably a benefit, making your project more
			inclusive and accessible. After all, most modern text editors (VS Code,
			Vim, Atom, JetBrains IDEs, etc.) allow for customization of the tab
			character&rsquo;s width freely, meaning everybody can have their preferred
			indentation size, while simultaneously using the same codebase and
			formatting rules.
		</p>
		<h2>Alignment</h2>
		<p>
			We finally come to one of the most common, and in my opinion, easily
			solveable issues with tabs and spaces. Inconsistent indentation is nice,
			until we encounter alignment&mdash;a place where tab width would make a
			siginificant visual difference. If one were to use tabs for alignment,
			everybody else with a different indentation style would not see the code
			as aligned. This is a simple problem with a simple solution&mdash;indent
			with tabs, align with spaces. Tabs and spaces each have their own
			benefits, so why not use them at their strengths? Simply treat a tab as
			its own unknown width. Only use tabs to align with the indentation of the
			previous item, and then use spaces for the rest of the alignment, since
			spaces will have a consistent size.
		</p>
		<h2>Conclusion</h2>
		<p>
			To me, using tabs over spaces seems like an obvious choice in the majority
			of scenarios. Unless you are dealing with incredibly outdated text
			editors, you won&rsquo;t experience significant downsides to using the tab
			indentation style.
		</p>
	</Post>
)

export default PostPage
