var fs = require ('fs')

console.log('Abriendo el archivo...')

var content = fs.readFileSync('el_quijote (1).txt','utf8')

console.log(content)

console.log('haciendo otra cosa')

console.log(process.uptime());