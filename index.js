const express = require('express');
const authRoutes = require('./task/routes/auth_routes');
const taskRoutes = require('./task/routes/routes');
const app = express();
const port = 3000


app.use(express.json());

app.use(authRoutes);

app.use('/api/v1/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
