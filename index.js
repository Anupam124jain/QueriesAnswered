let express = require("express");
const app = express();
const port = 3000;

// In this example, there is only one callback function, but there could be a whole
//  bunch of callback functions. In Express, they call these middleware, because they are
//   inserted in the middle of your route, between when the server gets the client’s request
//    and when the server sends its response back.
app.get('/', function(req, res){
    res.sendFile('index.js', {root: __dirname});
})

app.get('/app', function(req, res){
    res.sendFile('index.js', {root: __dirname});
})

app.listen(port, ()=>{
    console.log(`Now listening on port ${port}`);
})
