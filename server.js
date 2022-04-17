import express from "express";
import * as http from "http";
import courses from "./router/courses.js";

const app = express();
const server = http.createServer(app);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  //TODO: page d'accueil
  res.send('Home page');
});

app.use('/courses', courses);
    

server.listen(8080, () => {
	console.log('listening on *:8080');
});

