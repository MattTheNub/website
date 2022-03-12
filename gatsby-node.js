const path = require('path')
const fs = require('fs/promises')

exports.createPages = async ({ graphql, actions }) => {
	// Create Redirects
	actions.createRedirect({
		fromPath: '/vtg',
		toPath: 'https://vgcteamgenerator.mattthenub.dev/',
	})
	actions.createRedirect({
		fromPath: '/vgcteamgenerator',
		toPath: 'https://vgcteamgenerator.mattthenub.dev/',
	})

	actions.createRedirect({
		fromPath: '/sortdle',
		toPath: 'https://sortdle.mattthenub.dev/',
	})
}
