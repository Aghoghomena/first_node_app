import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const compiler = webpack(config);

//create an instance of express
const app = express();
//tell express which route to use
//any references to the route should be handled by this function it takes request and response
app.get('/', function (req,res ) {
    //dirname gets the directory name we are presently running in
    res.sendFile(path.join(__dirname, '../src/index.html'))
    
})

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.get('/users', function(req, res){
    //simple api call
    res.json([
        {"id":1, "firstName": "Bob", "lastName": "Bill", "email": "bobbill@gmail.com"},
        {"id":2, "firstName": "Tammy", "lastName": "Norton", "email": "tammynorton@gmail.com"},
        {"id":1, "firstName": "Tina", "lastName": "Knowles", "email": "lee.tina@gmail.com"}
    ])
})

//listen to the port
app.listen(port, function (err) {
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:' + port);
    }
});