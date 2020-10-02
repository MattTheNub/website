const path = require('path')
const fs = require('fs/promises')

exports.sourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
}) => {
	const posts = await fs.readdir(path.resolve('./src/blog/meta'))
	for (const post of posts) {
		const meta = require(path.resolve('./src/blog/meta', post))
		const date = new Date(meta.date)

		actions.createNode({
			...meta,
			path: `/blog/${date.getFullYear()}-${(date.getMonth() + 1)
				.toString()
				.padStart(2, '0')}-${date
				.getDate()
				.toString()
				.padStart(2, '0')}/${meta.title.toLowerCase().replace(/\W+/g, '-')}`,
			id: createNodeId(meta.title),
			internal: {
				type: 'Post',
				contentDigest: createContentDigest(meta),
			},
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	// Generate Blog
	const posts = await fs.readdir(path.resolve('./src/blog/meta'))

	for (const post of posts) {
		const meta = require(path.resolve('./src/blog/meta', post))
		const date = new Date(meta.date)

		actions.createPage({
			component: path.resolve('./src/blog', post.replace('.js', '.jsx')),
			path: `/blog/${date.getFullYear()}-${(date.getMonth() + 1)
				.toString()
				.padStart(2, '0')}-${date
				.getDate()
				.toString()
				.padStart(2, '0')}/${meta.title.toLowerCase().replace(/\W+/g, '-')}`,
		})
	}

	// Create Redirects
	actions.createRedirect({
		fromPath: '/vtg',
		toPath: 'https://vgcteamgenerator.mattthenub.dev/',
	})
	actions.createRedirect({
		fromPath: '/vgcteamgenerator',
		toPath: 'https://vgcteamgenerator.mattthenub.dev/',
	})
}
