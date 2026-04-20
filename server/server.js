const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); 

// --- DATABASE CONNECTION ---
// Railway will provide these values via Environment Variables
const db = mysql.createConnection({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || '', 
    database: process.env.MYSQLDATABASE || 'smart_home',
    port: process.env.MYSQLPORT || 3306
});

db.connect((err) => {
    if (err) {
        console.error('❌ DATABASE CONNECTION FAILED:', err.sqlMessage);
        return;
    }
    console.log('✅ Connected to MySQL Database');
});

// 1. ADD DEVICE
app.post('/api/add-device', (req, res) => {
    const { name, roomId, type } = req.body;
    const sql = "INSERT INTO devices (room_id, device_name, device_type, status) VALUES (?, ?, ?, 0)";
    db.query(sql, [roomId, name, type], (err) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        res.json({ success: true, message: "Device synced!" });
    });
});

// 2. TOGGLE STATUS
app.post('/api/update-status', (req, res) => {
    const { id, status } = req.body;
    const sql = "UPDATE devices SET status = ? WHERE device_id = ?";
    db.query(sql, [status, id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true });
    });
});

// 3. ADMIN DATASET
app.get('/api/admin/dataset', (req, res) => {
    if (req.headers['admin-auth'] !== 'kishan-secure-2026') {
        return res.status(403).send("Unauthorized Access");
    }
    db.query("SELECT * FROM devices ORDER BY device_id DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// --- DYNAMIC PORT FOR DEPLOYMENT ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});