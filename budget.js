const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', (req, res) => {
  const { category, amounts } = req.body;

  if (!category || !amounts || !Array.isArray(amounts)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const sql = 'INSERT INTO budget_data (category, amount) VALUES ?';
  const values = amounts.map(amount => [category, amount]);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error('MySQL Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Budget data inserted successfully', result });
  });
});

router.get('/total', (req, res) => {
  db.query('SELECT SUM(amount) AS total FROM budget_data', (err, results) => {
    if (err) {
      console.error('MySQL Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results[0]);
  });
});

module.exports = router;
