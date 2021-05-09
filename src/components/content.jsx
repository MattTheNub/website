import React from 'react'

const Content = ({ children, className }) => (
	<div id="content" className={className}>
		{children}
	</div>
)

export default Content
