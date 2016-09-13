import dotenv from 'dotenv';
import path from 'path';

import { Server } from './server.js';

dotenv.config();

let server = new Server(process.env.PORT);
server.run();