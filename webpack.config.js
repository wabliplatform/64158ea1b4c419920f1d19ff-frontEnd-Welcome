const path = require('path');

module.exports = {
  entry: {
	'Welcome' : './javascript/Welcome.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};