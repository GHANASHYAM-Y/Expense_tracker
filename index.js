const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const incomeRoutes = require('./income');  
const budgetRoutes = require('./budget');  

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use(express.static('public'));

db.query('DELETE FROM income_data', (err) => {
  if (err) console.error('   Error clearing income_data:', err);
  else console.log('  income_data table cleared on server start');
});

db.query('DELETE FROM budget_data', (err) => {
  if (err) console.error('   Error clearing budget_data:', err);
  else console.log('  budget_data table cleared on server start');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

app.use('/api/income', incomeRoutes);
app.use('/api/budget', budgetRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
