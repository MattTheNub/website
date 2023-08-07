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

	actions.createRedirect({
		fromPath: '/nuzlocke',
		toPath:
			'https://docs.google.com/document/d/1H-MC7KriA16hXl9rN_K3rvu5-vbWILVnFrHeU54tnH0/edit?usp=sharing',
	})
}
