// module biodata.js

const http = require('http');

const nama = "Nama: Muhamad Gunawan";
const tempatLahir = "Tempat Lahir: Tegal";
const tanggalLahir = "Tanggal Lahir: 15 November 2001";
const alamat = "Alamat: Kecamatan Bogor Utara	";

function tampilkanBiodata() {
  console.log(nama);
  console.log(tempatLahir);
  console.log(tanggalLahir);
  console.log(alamat);
}

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  tampilkanBiodata();
  response.end();
}

function startServer(port) {
  http.createServer(onRequest).listen(port);
  console.log(`Server berjalan pada port ${port}`);
}

module.exports = {
  tampilkanBiodata,
  startServer
};


