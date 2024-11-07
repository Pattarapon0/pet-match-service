import express from 'express';
import bodyParser from 'body-parser';
import route from './router/route.js';

const app = express();
const port = process.env.PORT??3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/v1', route);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
