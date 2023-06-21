const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'addPatient' : './javascript/addPatient.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};