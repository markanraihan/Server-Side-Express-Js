package yang diinstal saat membuat serverside
- npm init -y (meng inisiasi)
- npm install nodemon express (install nodemon agar tidak perlu restart dan express untuk frameworknya)
- npm add mysql2 (manggil database)
- npm add dotenv (manggil env data penting di local)
- npm add multer (library fitur upload file)

Flow API server-side
1. index
2. routes
3. controller
4. config
5. models
6. env
7. public

== Recap pemanggilan database yang rapih ===
memiliki config file untuk koneksi database
punya models untuk melakukan query kedalam database
baru digunakan di controller nya
saat melakukan proses koneksi database gunakan try catch untuk mengcapture errornya jika terdapat kesalahan



