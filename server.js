const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Налаштовуємо статичну папку, де лежить зібраний React-додаток
app.use(express.static(path.join(__dirname, 'dist')));

// Перенаправляємо всі маршрути на index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Запускаємо сервер
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
