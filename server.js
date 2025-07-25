const express = require('express');
const app = express();
const PORT = 8080;

//routes
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Blood Bank APP'
  });
});

//listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});