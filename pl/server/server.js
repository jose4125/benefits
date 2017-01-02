/*jshint esversion: 6 */
import express from 'express';
import path from 'path';

const APP = express();
const ENV = process.env.NODE_ENV;
const DIST = '../public';
const PORT = process.env.PORT || 8000;

APP.use(express.static(path.join(__dirname, DIST)));

APP.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

APP.listen(PORT, ()=> {
  console.log(`app listening at http://localhost:${PORT}`);
});
