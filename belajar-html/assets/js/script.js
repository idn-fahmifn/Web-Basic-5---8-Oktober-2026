let nama = "Fahmi Nuradi";
nama = "asep";

console.log(nama);

const myName = "Alex";
console.log(myName);

let contoh_string = "Ini tipe data string";
let angka = 1.5;
let is_sarapan = true;

let buah = ["apel", "nanas", "strowberry", 10];
console.log(buah[1]);

let biodata = {
  nama: "Fahmi Nuradi",
  umur: 21,
  pekerjaan: "AI Engineer",
  pendidikan: {
    instansi: "Universitas Swasta Jakarta",
    jurusan: "teknik Informatika",
  },
};

console.log(biodata.pekerjaan);
console.log(biodata.pendidikan.instansi);

let barang = null;
let latter;

console.log(latter);

let asep =
  "hallo nama saya " + nama + " Saya kuliah di " + biodata.pendidikan.instansi;
asep = `Hallo nama saya adalah ${nama}, Saya kuliah di ${biodata.pendidikan.instansi}`;
console.log(asep);

let nilai = 105;
//

if (nilai > 100) {
  console.log("Nilai melebihi batas, masukan kembali.");
} else if (nilai < 0) {
  console.log("Nilai yang kamu masukan tidak sesuai.");
} else if(nilai >= 82) {
    console.log("Nilai kamu memuaskan!");
}else if(nilai > 75) {
    console.log("Nilai kamu baik!");
}
else if(nilai >= 60) {
    console.log("Nilai kamu cukup!");
}
else {
  console.log("Kamu perlu remedial");
}

// perbaiki : jika nilai > 100 atau < 0 => nilai kamu error.

let day = "senin";

switch (day) {
  case "sabtu":
    console.log("Kantor menerapkan sistem WFH");
    break;

  case "minggu":
    console.log("Kantor libur");
    break;

  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
  case "jumat":
    console.log("Kamu masuk kerja");
    break;

  default:
    console.log("Data yang kamu masukan tidak valid");
    break;
}

// hari wajib dari senin - minggu, selain hari itu = error
