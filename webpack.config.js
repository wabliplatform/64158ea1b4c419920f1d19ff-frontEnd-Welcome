const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'addPatient' : './javascript/addPatient.js',
	'updatePatient' : './javascript/updatePatient.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};