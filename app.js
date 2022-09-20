const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);

const port = 8000;
app.listen(port, console.log(`Server online on http://localhost:${port}`));
