const http= require('http');
const app = require('./Back-end/app');
const port = 3100;
app.set(port);

const server = http.createServer(app);
server.listen(port);