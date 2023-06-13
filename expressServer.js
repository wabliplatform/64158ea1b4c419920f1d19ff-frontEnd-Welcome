const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','Page1.html')));
			this.app.get('/Page1', (req, res) => res.sendFile(path.join(__dirname,'html','Page1.html')));
			this.app.get('/Page1/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Page1.html')));
			this.app.get('/addPatient', (req, res) => res.sendFile(path.join(__dirname,'html','addPatient.html')));
			this.app.get('/addPatient/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addPatient.html')));
			this.app.get('/Login', (req, res) => res.sendFile(path.join(__dirname,'html','Login.html')));
			this.app.get('/Login/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Login.html')));
			this.app.get('/sofar', (req, res) => res.sendFile(path.join(__dirname,'html','sofar.html')));
			this.app.get('/sofar/:id', (req, res) => res.sendFile(path.join(__dirname,'html','sofar.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;