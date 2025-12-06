const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
  const { type, amounts } = req.body;

  if (!type || !Array.isArray(amounts)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const sql = 'INSERT INTO income_data (type, amount) VALUES ?';
  const values = amounts.map(amount => [type, amount]);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error('MySQL Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.json({ message: 'Income data inserted successfully', result });
  });
});

module.exports = router;
