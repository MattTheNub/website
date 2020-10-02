import React from 'react'
import Header from '../../components/header'
import Content from '../../components/content'
import Footer from '../../components/footer'
import { useStaticQuery, graphql } from 'gatsby'
import PostPreview from '../../components/post-preview'

const Blog = () => {
	const {
		allPost: { nodes: data },
	} = useStaticQuery(graphql`
		query PostQuery {
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
			<Header title="Blog" />
			<Content>
				{data.map(post => (
					<PostPreview {...post}></PostPreview>
				))}
			</Content>
			<Footer />
		</>
	)
}
export default Blog
