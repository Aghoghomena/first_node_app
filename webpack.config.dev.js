import path from 'path';

//webpack is configured by exporting an object
//this means webpack will display the name of all the files that its bundling
//enable debugging
//output is the location webpack puts the file it will not actually generate files.
//told webpack to handle css and js
export default{

    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output:{
        path:path.resolve(__dirname, 'src/index'),
        publicPath:'/',
        filename: 'bundle.js',
    },
    plugins: [],
    module:{
        loaders: [
            {test:/\.js$/, exclude: /nodule_modules/, loaders: ['babel']},
            {test:/\.css$/, loaders: ['style', 'css']}
        ]
    }


}