const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const plugins = [
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/index.html'),
		inject: 'body',
		filename: 'index.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/class-example.html'),
		inject: 'body',
		filename: 'examples/class-example.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/expressions-and-values.html'),
		inject: 'body',
		filename: 'examples/expressions-and-values.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/types.html'),
		inject: 'body',
		filename: 'examples/types.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/destructuring.html'),
		inject: 'body',
		filename: 'examples/destructuring.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/comparisons-and-ternaries.html'),
		inject: 'body',
		filename: 'examples/comparisons-and-ternaries.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/functions.html'),
		inject: 'body',
		filename: 'examples/functions.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/currying.html'),
		inject: 'body',
		filename: 'examples/currying.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/function-composition.html'),
		inject: 'body',
		filename: 'examples/function-composition.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/arrays.html'),
		inject: 'body',
		filename: 'examples/arrays.html',
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/../src/examples/method-chaining.html'),
		inject: 'body',
		filename: 'examples/method-chaining.html',
	}),
];

module.exports = plugins;