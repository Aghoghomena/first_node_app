import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;

//create an instance of express
const app = express();
//tell express which route to use
//any references to the route should be handled by this function it takes request and response
app.get('/', function (req,res ) {
    //dirname gets the directory name we are presently running in
    res.sendFile(path.join(__dirname, '../src/index.html'))
    
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