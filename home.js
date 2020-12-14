//creating your web server
var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000;
http.createServer(function(req, res) {
var q = url.parse(req.url, true);
var filename = "." + q.pathname;
if (filename == './') {
filename = './index';
}
filename = filename + ".html";
console.log('loading:...' + filename);
fs.readFile(filename, function(err, data) {
if (err){
res.writeHead(404, {'Content-Type': 'text/html'});
return res.end("404: Page Not Found");
}
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
return res.end();
});
}).listen(PORT);
console.log("Server Listening on assigned PORT...");

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-152045750-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-152045750-1');
</script>