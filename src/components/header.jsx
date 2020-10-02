import React from 'react'
import NavBar from './navbar'
import '../styles/main.scss'

const Header = ({ title }) => (
	<div id="header">
		<NavBar />
		<title>{title} &middot; MattTheNub</title>
		<h1>MattTheNub</h1>
		<span className="open-source">
			Source code available{' '}
			<a href="https://github.com/MattTheNub/website">on GitHub</a>
		</span>
	</div>
)

export default Header
