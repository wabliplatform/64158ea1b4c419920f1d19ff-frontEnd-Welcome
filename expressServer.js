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
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/Home', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/Home/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/addPatient', (req, res) => res.sendFile(path.join(__dirname,'html','addPatient.html')));
			this.app.get('/addPatient/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addPatient.html')));
			this.app.get('/updatePatient', (req, res) => res.sendFile(path.join(__dirname,'html','updatePatient.html')));
			this.app.get('/updatePatient/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updatePatient.html')));
			this.app.get('/userInfo', (req, res) => res.sendFile(path.join(__dirname,'html','userInfo.html')));
			this.app.get('/userInfo/:id', (req, res) => res.sendFile(path.join(__dirname,'html','userInfo.html')));
			
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