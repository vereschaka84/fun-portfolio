const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	plugins: [new HtmlWebpackPlugin({
		template: path.resolve(__dirname, './src/index.html')
	})],
};