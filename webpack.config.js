const path = require('path');

module.exports = {
  entry: {
	'Page1' : './javascript/Page1.js',
	'addPatient' : './javascript/addPatient.js',
	'Login' : './javascript/Login.js',
	'sofar' : './javascript/sofar.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};