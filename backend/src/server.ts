import app from './app';
import client from './database';


client.connect()
  .then(() => {
    console.log('Connected to the database');
  })

const BACKEND_PORT = process.env.BACKEND_PORT || 8080;
app.listen(BACKEND_PORT, () => {
  console.log(`Server is running on port ${BACKEND_PORT}`);
});
