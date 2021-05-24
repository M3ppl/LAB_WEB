const autoprefixer = require('autoprefixer');
module.exports = [
	{
		entry: ['./style.scss', './script.js'],
		output: {
			filename: 'bundle.js',
		},
		devServer:{
			port: 4000
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'bundle.css',
							},
						},
						{
							loader: 'extract-loader'
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										autoprefixer()
									]
								}
							}
						},
						{
							loader: 'sass-loader',
							options: {
								// Prefer Dart Sass
								implementation: require('sass'),
								webpackImporter: false,
								sassOptions: {
									includePaths: ['./node_modules']
								},
							}
						},

					]
				}
			]
		},
	}
];
