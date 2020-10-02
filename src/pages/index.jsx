import React from 'react'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'
import { useStaticQuery, graphql } from 'gatsby'
import PostPreview from '../components/post-preview'

const Home = () => {
	const {
		allPost: { nodes: data },
	} = useStaticQuery(graphql`
		query PostQuery2 {
			allPost {
				nodes {
					date
					title
					preamble
					path
				}
			}
		}
	`)

	data.sort((a, b) => new Date(b.date) - new Date(a.date))
	return (
		<>
			<Header title="Home" />
			<Content>
				<p>
					Hi, I'm Matt! I'm a rustacean and occasionally a web developer. I{' '}
					<em>sometimes</em> finish my coding projects.
				</p>

				<h1>Latest Blog Post</h1>
				<PostPreview {...data[0]}></PostPreview>
			</Content>
			<Footer />
		</>
	)
}

export default Home
