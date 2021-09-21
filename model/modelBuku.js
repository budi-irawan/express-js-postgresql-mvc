let koneksi = require("../config/database");

class ModelBuku {
  static listBuku(cb) {
    let query = `SELECT * FROM buku WHERE deleted = 0`;
    koneksi.query(query, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res.rows);
      }
      koneksi.end();
    });
  }

  static simpan(isbn, judul, pengarang, thn_terbit, harga, cb) {
    let query = `
        INSERT INTO buku (isbn,judul,pengarang,thn_terbit,harga) 
        VALUES ($1,$2,$3,$4,$5) 
        RETURNING ID;`;

    let val = [isbn, judul, pengarang, thn_terbit, harga];

    koneksi.query(query, val, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res.rows);
      }
      koneksi.end();
    });
  }

  static gantiJudul(id, judulBaru, cb) {
    let query = `
      UPDATE buku SET judul = $1 WHERE id = $2 
      RETURNING judul`;

    let val = [judulBaru, id];

    koneksi.query(query, val, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res.rows);
      }
      koneksi.end();
    });
  }

  static delete(id, cb) {
    let query = `
      UPDATE buku SET deleted = 1 WHERE id = $1 
      RETURNING id`;

    let val = [id];

    koneksi.query(query, val, (err, res) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, res.rows);
      }
      koneksi.end();
    });
  }
}

module.exports = ModelBuku;
