let modelBuku = require("../model/modelBuku");
let viewBuku = require("../view/viewBuku");

class Buku {
  static listBuku() {
    modelBuku.listBuku(function (err, data) {
      if (err) {
        viewBuku.tampilError(err);
      } else {
        viewBuku.tampilData(data);
      }
    });
  }

  static simpanBuku(isbn, judul, pengarang, thn_terbit, harga) {
    modelBuku.simpan(isbn, judul, pengarang, thn_terbit, harga, (err, data) => {
      if (err) {
        viewBuku.tampilError(err);
      } else {
        viewBuku.tampilData(data);
      }
    });
  }

  static gantiJudul(id, judulBaru) {
    modelBuku.gantiJudul(id, judulBaru, (err, data) => {
      if (err) {
        viewBuku.tampilError(err);
      } else {
        viewBuku.tampilData(data);
      }
    });
  }

  static delete(id) {
    modelBuku.delete(id, (err, data) => {
      if (err) {
        viewBuku.tampilError(err);
      } else {
        viewBuku.tampilData(data);
      }
    });
  }
}

module.exports = Buku;
