// let koneksi = require("./config/database");

// let query = `CREATE TABLE IF NOT EXISTS buku (
//     id serial PRIMARY KEY,
//     ISBN VARCHAR (10),
//     judul VARCHAR (40),
//     pengarang VARCHAR (25),
//     thn_terbit VARCHAR (4),
//     harga numeric,
//     deleted int
// )`;
// // let query = `SELECT NOW()`;

// koneksi.query(query, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res.rows);
//   }
//   koneksi.end();
// });
