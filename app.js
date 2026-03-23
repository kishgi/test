'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 7000;

// Middleware (optional but useful)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
