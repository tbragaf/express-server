import  express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

// Start the server
app.set('port', process.env.PORT || 3000);

let server = app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + server.address().port);
});