//TODO: Creating the server
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log('Listening to LocalHost on port: ', PORT);
});
