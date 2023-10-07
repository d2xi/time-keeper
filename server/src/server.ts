// src/server.ts
import express from 'express';
import path from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
const buildPath = path.resolve(__dirname, '../../frontend/dist');
app.use(express.static(buildPath));

// Set up proxy for API requests
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
}));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
