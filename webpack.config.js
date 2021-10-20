//ruta absoluta
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); //ruta absoluta

const ruleForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}
const ruleForJavaScript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                runtime: 'automatic' // 'classic
                }
            ]
        ]
    }
}

const rules = [ruleForJavaScript, ruleForStyles]

module.exports = {
    // entry: './src/index.js'
    output: {
        path: path.resolve(__dirname,'build')
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'public/index.html' })
    ],
    module: {rules},
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
        open: true, //abrimos el navegador
        port: 3000
    }
}