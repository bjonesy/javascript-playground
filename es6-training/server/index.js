const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
	const compiler = webpack(config);
	const middleware = webpackMiddleware(compiler, {
		publicPath: config.output.publicPath,
		contentBase: 'src',
		stats: {
		  colors: true,
		  hash: false,
		  timings: true,
		  chunks: false,
		  chunkModules: false,
		  modules: false,
		},
	});

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('/examples/class-example.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/class-example.html')));
		res.end();
	});
	app.get('/examples/expressions-and-values.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/expressions-and-values.html')));
		res.end();
	});
	app.get('/examples/types.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/types.html')));
		res.end();
	});
	app.get('/examples/destructuring.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/destructuring.html')));
		res.end();
	});
	app.get('/examples/comparisons-and-ternaries.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/comparisons-and-ternaries.html')));
		res.end();
	});
	app.get('/examples/functions.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/comparisons-and-ternaries.html')));
		res.end();
	});
	app.get('/examples/currying.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/currying.html')));
		res.end();
	});
	app.get('/examples/function-composition.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/function-composition.html')));
		res.end();
	});
	app.get('/examples/array.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/array.html')));
		res.end();
	});
	app.get('/examples/method-chaining.html', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/examples/array.html')));
		res.end();
	});
	app.get('*', (req, res) => {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/../dist/index.html')));
		res.end();
	});
} else {
	app.use(express.static(path.join(__dirname, '/../dist')));
	app.get('/examples/class-example.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/anvato-example.html'));
	});
	app.get('/examples/expressions-and-values.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/expressions-and-values.html'));
	});
	app.get('/examples/types.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/types.html'));
	});
	app.get('/examples/destructuring.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/destructuring.html'));
	});
	app.get('/examples/comparisons-and-ternaries.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/comparisons-and-ternaries.html'));
	});
	app.get('/examples/functions.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/comparisons-and-ternaries.html'));
	});
	app.get('/examples/currying.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/currying.html'));
	});
	app.get('/examples/function-composition.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/function-composition.html'));
	});
	app.get('/examples/arrays.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/arrays.html'));
	});
	app.get('/examples/method-chaining.html', (req, res) => {
		res.sendFile(path.join(__dirname, '/../dist/examples/method-chaining.html'));
	});
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'));
	});
}

app.listen(port, (err) => {
	if (err) {
		// eslint-disable-next-line no-console
		console.log(err);
	}
	// eslint-disable-next-line no-console
	console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});