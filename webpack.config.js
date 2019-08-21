const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "./example/src/index.html"),
	filename: "./index.html"
});

module.exports = {
	entry: path.join(__dirname, "./example/src/app.js"),
	output: {
		path: path.join(__dirname, "example/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
			test: /\.(js|jsx)$/,
			use: "babel-loader",
			exclude: /node_modules/
		  },
		  {
			test: /\.css$/,
			use: [
			  {
				loader: "style-loader"
			  },
			  {
				loader: "css-loader",
				options: {
				  modules: true,
				  localIdentName: "[local]"
				}
			  }
			]
		  },
		
		  {
			test: /\.less$/,
			exclude: /node_modules/,
			use: [
			  {
				loader: "style-loader"
			  },
			  {
				loader: "css-loader",
				options: {
				  modules: true,
				  localIdentName: "[name]_[local]__[hash:base64:5]"
				}
			  },
			  {
				loader: "less-loader",
				options: {
				  javascriptEnabled: true
				}
			  }
			]
		  },
		
		  {
			test: /\.less$/,
			include: /node_modules/,
			use: [
			  {
				loader: "style-loader"
			  },
			  {
				loader: "css-loader"
			  },
			  {
				loader: "less-loader",
				options: {
				  // 主题变量
				  modifyVars: {},
				  javascriptEnabled: true
				}
			  }
			]
		  }
	]
	},
	plugins: [htmlWebpackPlugin],
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devServer: {
		port: 3003
	}
};
