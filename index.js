const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.post('/test', (req, res)=>{
	setTimeout(()=>{
		res.json({'data' : 'THIS IS YOUR DATA'});
	} , parseInt(req.query.wait) || 2000);
});



umap = {
	'https://app.dev.bicycle.io/traces?from=1639372476000&mode=traces&quantile=0.95&query=fields.Country%20in%20%5B%22Brazil%22%5D&to=1639459776000' : 'resp1.json',
}

app.post('/query', (req, res) => {
	console.log(req)
	let url = req.query.url || 'https://app.dev.bicycle.io/traces?from=1639372476000&mode=traces&quantile=0.95&query=fields.Country%20in%20%5B%22Brazil%22%5D&to=1639459776000';
	if(url){
		if(umap[url]){
			setTimeout(()=>{
				res.json(require('./responses/' + umap[url]));
			}, parseInt(req.query.wait) || 2000)
		} else {
			res.status(416).json({'error' : 'not found'});
		}
	} else {
		res.status(400).json({'error' : 'No URL provided'});
	}
})

app.post('/auth-get-user', (req, res) => { // 
	res.json({
		'id' : '123@bicycle.io',
	});
})

server.listen(8001, '0.0.0.0' , ()=>{
	console.log("ASDF");
})

// exports.app = functions.https.onRequest(app);
