import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
// eslint-disable-next-line import/default
import config from '../webpack.config.dev';

/* esliint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    pablicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);// eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});

