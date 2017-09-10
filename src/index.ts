let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(__dirname));

// api endpoints here
app.use('/api/endpoint', (req, res) => {
    res.json({data: 'test'});
});

// pass routing to angular2 if no endpoints were hit. When server grows, this should be in error handling
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(3000, () => {
    console.log('Example listening on port 3000!');
});

module.exports = app;