import React from 'react'
import Header from '../../components/header'
import Content from '../../components/content'
import Footer from '../../components/footer'
import Copyable from '../../components/copyable'

const Home = () => {
	return (
		<>
			<Header />
			<Content>
				<h1>Your User Agent string is:</h1>
				<Copyable>{navigator.userAgent}</Copyable>
			</Content>
			<Footer />
		</>
	)
}

export default Home
