const path = require('path');
// 引入html模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入自动清理垃圾模块
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  //入口
  entry: "./src/index.js",
  //输出
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./index.js",
    publicPath: '/'
  },
  //loader
  module: {
    rules: [
      //js语法转换
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      //css
      {
        test: /\.css$/i,
        use: ["vue-style-loader", "css-loader"],
      },
      //处理html中图片资源
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      //处理样式中图片资源
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // 8kb以下的图片会 base64 处理
            // outputPath: 'images', // 文件本地输出路径
            // publicPath: './src/public/imgs/1.jpg', // 图片的url路径/
            // name: '[hash:8].[ext]', // 修改文件名称和后缀 
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  //插件     html     自动清除多余垃圾文件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true, // 自动打开浏览器
    compress: true, // 启动gzip压缩
    quiet: true,
    port: 3000, // 端口号
  },
  devtool: 'cheap-module-eval-source-map', //设置 devtool 策略
  resolve: {
    extensions: [".js", ".json", ".vue"],//自动解析包含的扩展名文件，以后导入不用带扩展名
    alias: {
      //配置别名的地方
      '@': path.resolve(__dirname, 'src'),
    }
  },

};