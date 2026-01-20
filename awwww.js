// Ini fungsi pas kita ngetik di input (onkeyup)
function ketikNama() {
  var isiInput = document.getElementById("namaInput").value.trim(); // Tambah trim untuk bersihkan spasi

  // Output muncul di console log
  console.log("User lagi ngetik: " + isiInput);
}

// Ini fungsi pas tombol diklik (onclick)
function tombolKlik() {
  var nama = document.getElementById("namaInput").value.trim(); // Tambah trim

  if (nama == "") {
    alert("Nama gak boleh kosong ya!");
  } else {
    // Output muncul pake Alert
    alert("Halo " + nama + ", selamat datang di web pemula!");
  }
}

// Event listeners (dijalankan setelah DOM loaded untuk memastikan elemen tersedia)
document.addEventListener("DOMContentLoaded", () => {
  const namaInput = document.getElementById("namaInput");
  const loginBtn = document.getElementById("loginBtn");

  // Event untuk input (onkeyup)
  namaInput.addEventListener("input", ketikNama); // Menggunakan "input" untuk real-time

  // Event untuk tombol (onclick)
  loginBtn.addEventListener("click", tombolKlik);
});