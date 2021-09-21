let request = process.argv;
let controllerBuku = require("./controller/controllerBuku");

switch (request[2]) {
  case "list":
    controllerBuku.listBuku();
    break;

  case "simpan":
    controllerBuku.simpanBuku(
      request[3],
      request[4],
      request[5],
      request[6],
      request[7]
    );
    break;

  case "ganti":
    controllerBuku.gantiJudul(request[3], request[4]);
    break;

  case "delete":
    controllerBuku.delete(request[3]);
    break;

  default:
    console.log(`Kesalahan perintah`);
}
