const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // punto de entrada
  output: {
    // lugar al que saldrán todos los archivos
    path: path.resolve(__dirname, "dist"), //en nuestro path, crea la carpeta dist
    filename: "bundle.js", // nombre del archivo js resultante
    publicPath: '/'
  },
  resolve: {
    // extensión de archivos a tomar en cuenta
    extensions: [".js", ".jsx"],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@logos': path.resolve(__dirname, 'src/assets/logos'),
    }
  },
  module: {
    // loaders para cada tipo de archivo
    rules: [
      // reglas para usar
      {
        test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
        exclude: /node_modules/, // siempre excluir node modules
        use: {
          // indicamos el loader
          loader: "babel-loader", // babel
        },
      },
      {
        test: /\.html$/, // extensiones html
        use: [
          {
            loader: "html-loader", // loader a usar
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset'
      },
    ],
  },
  plugins: [
    // plugins
    new HtmlWebpackPlugin({
      // instanciamos el plugin para html
      template: "./public/index.html", // archivo raíz a transformar
      filename: "./index.html", // el archivo resultante
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    allowedHosts: path.join(__dirname, 'dist'),
    port: 3005,
  }
};
