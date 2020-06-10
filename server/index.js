const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const basicAuth = require('express-basic-auth')

console.log('STAGING: '+ process.env)
console.log('STAGING: '+ process.env.STAGING)

if(process.env.STAGING == 'TRUE') {
	console.log('STAGING')
	app.use(basicAuth({
		users: { 'claire': 'evreux' },
		challenge: true,
		realm: 'Imb4T3st4pp'
	}))
}

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
