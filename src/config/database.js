const mysql = require('mysql2'); // Library untuk mengakses database

// Membuat pool koneksi ke database yang sudah dibuat
const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Menyertakan Promise agar bisa menggunakan async/await
module.exports = dbPool.promise();
