// Fungsi untuk event onkeyup pada input nama: Menampilkan panjang karakter di console
function hitungPanjangNama() {
    const nama = document.getElementById('nama').value;
    console.log(`Panjang nama: ${nama.length} karakter`);
}

// Fungsi untuk event onclick pada tombol: Menampilkan biodata lengkap menggunakan alert
function tampilkanBiodata() {
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const hobi = document.getElementById('hobi').value;
    
    if (nama && umur && hobi) {
        alert(`Biodata Anda:\nNama: ${nama}\nUmur: ${umur} tahun\nHobi: ${hobi}`);
    } else {
        alert("Harap isi semua field!");
    }
}