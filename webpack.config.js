var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry:{
		'index': './src/page/index/index.js',
		'login': './src/page/login/index.js',
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename:'js/[name].js'
	},
	externals: {
		'jquery' : 'window.jquery'
	},
	/*optimization:{
		splitChunks:{
			//缓存组
			cacheGroups:{
				//commous表示公共的模块
				commons:{
					name:"base",
					chunks:'initial',
					minChunks:2,
					minSize:0
				}
			}
		}
	},*/
	module :{
		rules:[{
			test:/\.css$/,
			/*loader:"style-loader!css-loader"*/
			loader:ExtractTextPlugin.extract({
				fallback:"style-loader",
				use:"css-loader"
			})
		}
	]
		
	},
	plugins:[
	new ExtractTextPlugin("css/[name].css")
	]
		
	
	
}
module.exports = config;