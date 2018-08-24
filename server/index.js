const util = require('util')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const urls = require('get-urls');
const strip = require('striptags');
const nospec = function(string) {
	return string.replace(/[<>'"();]/gi, '');
}
const prep = function(url) {
	return nospec(strip(decodeURI(url)));
}
const url = require('url');

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.get('/css',function(req,res,next){
  	let css = [];
  	let js = JSON.parse(fs.readFileSync('deps.txt','utf8'))
  	fs.readdirSync('./static/').forEach(file=>{
  		ext = path.extname(file);
  		if(ext=='.css')
  			css.push(file);
  	});
  	let data = {
  		css: css,
  		js: js
  	}
  	res.send(JSON.stringify(data));
  })

  app.get('/', async function(req,res,next) {
	  	//let sites = fs.readFileSync('sites.txt','utf8');
	  	let { data } = await axios('http://www.newomics.com');
		let clean = []
		let mime = ['.png','.jpg','.gif','.svg','.css','.js']
		urls(data).forEach(url=>{
			url = prep(url).split('?')[0].replace('https','http')
			let ext = path.extname(url)
			if(mime.includes(ext)) {
				clean.push(nospec(decodeURI(strip(url))))
			}
		});
		let deps = []
		for (const url of clean) {
			let ext = path.extname(url)
			let { data } = await axios.get(url,{responseType:"arraybuffer"})
			let name = path.basename(url)

			let parsed = path.parse(url)
			let fix = url.replace(parsed.dir+'/'+parsed.base,parsed.base)
			console.log(fix);
			if(ext=='.js')
				deps.push({src: fix})
			//deps.push({src: nospec(decodeURI(strip(url)))})
			fs.writeFile('static/'+name,data,function(err){
        		        if(err)
        		      	  return log.write(err)
        		})
		}
		//reqhost = url.parse('http://'+req.params.page+'/').hostname
		fs.writeFileSync('deps.txt',JSON.stringify(deps))
		next();
  })
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
