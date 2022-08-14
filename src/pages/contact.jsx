import React from 'react'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

const Contact = () => {
	return (
		<>
			<Header title="Contact" />
			<Content>
				<p>Here are some ways you can contact me:</p>
				<ul>
					<li>
						Send me an email at{' '}
						<a href="mailto:matt@mattthenub.dev">matt@matthenub.dev</a>
					</li>
					<li>
						Message me on Matrix:{' '}
						<a
							href="https://matrix.to/#/@mattthedev:matrix.org"
							target="_blank"
							rel="noreferrer"
						>
							@mattthedev:matrix.org
						</a>
					</li>
				</ul>
			</Content>
			<Footer />
		</>
	)
}

export default Contact
