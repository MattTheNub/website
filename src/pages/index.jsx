import React from 'react'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

const Home = () => {
	return (
		<>
			<Header title="Home" />
			<Content>
				<p>
					Hi, I'm Matt! I'm a rustacean and occasionally a web developer. I{' '}
					<em>sometimes</em> finish my coding projects.
				</p>
			</Content>
			<Footer />
		</>
	)
}

export default Home
