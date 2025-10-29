const express = require('express');
const app = express();
const PORT = 8001;

// Token rahasia (hardcode, bisa juga dari .env)
const TOKEN = "mysecrettoken";

//Middleware sederhana untuk cek Bearer Token
function authBearer(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token tidak ditemukan' });
    }

    if (token !== TOKEN) {
        return res.status(403).json({ error: 'Token salah atau tidak valid' });
    }

    next();
}


app.use(express.json());
app.listen(PORT, () => {
    console.log(`server berjalan di htpp://localhots:${PORT}`);
});