const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //have to add in (module > rules > use - "MiniCssExtractPlugin.loader")if you want to minimize CSS
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = env => ({
  mode: env === 'develop' ? 'development' : 'production',

  entry: ['./src/main.js', './src/styles/main.scss', './src/template/index.pug'],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  performance: { hints: false }, //have to change for best performance to (max file - 250 kB)

  //OPTIMIZATIONS------------------------------------------------------------------------------------------
  optimization: {
    usedExports: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  resolve: {
    modules: ['node_modules'],
    alias: {
      TweenLite: 'gsap/src/minified/TweenLite.min.js',
      TweenMax: 'gsap/src/minified/TweenMax.min.js',
      TimelineLite: 'gsap/src/minified/TimelineLite.min.js',
      TimelineMax: 'gsap/src/minified/TimelineMax.min.js',
      ScrollMagic: 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'animation.gsap':
        'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
      'debug.addIndicators':
        'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
    }
  },

  //PLUGINS------------------------------------------------------------------------------------------
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template/index.pug',
      favicon: './src/favicon/favicon-16x16.png',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/template/about.pug',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'services.html',
      template: './src/template/services.pug',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'shop.html',
      template: './src/template/shop.pug',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/template/blog.pug',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'contact-us.html',
      template: './src/template/contact-us.pug',
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin([
      { from: './src/images/', to: 'images' } // change images to images
    ])
  ],

  //MODULES--------------------------------------------------------------------------------------
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader']
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader:
              process.env.NODE_ENV !== 'production'
                ? 'style-loader'
                : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader?url=false'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'import-glob-loader'
          }
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /favicon\.png$/,
        use: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },

      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },

      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
});

module.exports = config;
