import 'dotenv/config';
import express from 'express';
import contactRoutes from './routes/contact.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(express.json());

// --- Routes ---
app.use('/api/contact', contactRoutes);

// --- Health check ---
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Accurvia Backend is running' });
});

// --- Error handling (must be last) ---
app.use(errorHandler);

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

export default app;
