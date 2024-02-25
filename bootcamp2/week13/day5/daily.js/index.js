const express = require('express');
const app = express();
const sampleRoutes = require('./routes/sampleRoutes');
const { authenticateUser, authorizeRole } = require('./middleware/rbacMiddleware');

app.use(express.json());


app.use('/public', sampleRoutes);

app.use(authenticateUser);
app.use('/user-profile', authorizeRole('user-profile'), sampleRoutes);
app.use('/admin-panel', authorizeRole('admin-panel'), sampleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
