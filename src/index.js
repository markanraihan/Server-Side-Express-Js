require('dotenv').config()
const PORT = process.env.PORT || 5000;

const express = require('express'); // Wajib memanggil express

const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

const app = express();

// =======================================================
// middleware dipanggil berurutan berfungsi sebagai log ketika ada req, pengecekan json web token, dll
// contoh:
// app.use('/', (req, res, next) => {
//     console.log('log terjadi request ke API ini');
//     next();
// });

app.use(middlewareLogRequest); // grouping panggil middleware
app.use(express.json());
app.use('/assets', express.static('public/images'));

app.use('/users', usersRoutes); // grouping dari users.js manggil routes
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: "upload berhasil"
    })
})

// =======================================================
// patern dalam routing adalah app.method(path, handler);
// routes pada index (/) root 
// * contoh dalam html: 
// app.get('/', (req, res) => {
//     res.send('<h1>get arkan</h1>');
// });
// * contoh dalam json:
// app.post('/', (req, res) => {
//     res.json({
//         nama: "arkan",
//         angkatan: "2022"
//     });
// });
// * contoh dalam menggunakan berbagai method:
// app.use('/', (req, res, next) => {
//     res.send('halo dunia');
// });

// mendengarkan pada port 4000, karna 3000 biasanya oleh frontend
app.listen(PORT, () => {
    console.log(`server berhasil running di port ${PORT}`);
})