import React from 'react'
import Content from './content'
import Header from './header'
import Footer from './footer'

const Post = ({ title, children, preamble }) => (
	<>
		<Header title={title} />
		<Content className="blog">
			<h1>{title}</h1>
			<p>{preamble}</p>
			{children}
		</Content>
		<Footer />
	</>
)

export default Post
