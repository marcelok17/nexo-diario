const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Middleware
app.use(compression());

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Servir index.html para todas las rutas (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 NEXO DIARIO corriendo en puerto ${PORT}`);
  console.log(`📰 Abierto en http://localhost:${PORT}`);
});
