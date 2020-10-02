import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ preamble, title, path }) => (
	<>
		<h3>{title}</h3>
		<p>
			{preamble} <Link to={path}>Read more...</Link>
		</p>
	</>
)

export default PostPreview
