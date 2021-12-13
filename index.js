const functions = require(‘firebase-functions’);
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.post('/test', (req, res)=>{
	setTimeout(()=>{
		res.json({'data' : 'THIS IS YOUR DATA'});
	} , parseInt(req.query.wait) || 2000);
});

server.listen(3005, ()=>{
	console.log("ASDF");
})

exports.app = functions.https.onRequest(app);
