var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3000);
console.log('Servidor IV DEVS!! la vamos a llevar ctm!');
