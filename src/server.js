import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

/**
 * The server class
 */
export class Server {

  /**
   * Creates an instance of Server.
   * 
   * @param {Number} port
   */
  constructor(port: Number) {
    // create expressjs application
    this.app = express();

    // configure the application
    this._config(port);

    this._configRoutes();
  }
  
  /**
   * Configures the application
   * @param  {Number=3000} port
   */
  _config(port: Number = 3000) {
    this.app.set('port', port);

    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
  }

  /**
   * Configures the application's routes
   */
  _configRoutes() {
    
  }

  /**
   * Starts the express server
   */
  run() {
    let server = this.app.listen(this.app.get('port'), () => {
      console.log('Server listening on port ' + server.address().port);
    });
  }

}