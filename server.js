const express = require('express');
const db = require('./db/connection');

const PORT = process.env.PORT || 3002;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//starts the express server on 3002
// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });