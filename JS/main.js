// Menunggu halaman selesai dimuat
onload = () => {
    // Menghilangkan kelas 'container' dari body
    document.body.classList.remove("container");

    // Mendapatkan elemen audio
    const audio = document.getElementById('myAudio');

    // Menambahkan event listener untuk interaksi pertama pengguna
    document.body.addEventListener('click', () => {
        // Cek apakah audio masih dalam mode 'muted'
        if (audio.muted) {
            // Jika iya, nonaktifkan mode 'muted' dan putar lagu
            audio.muted = false;
            audio.play().catch(error => {
                console.error("Gagal memutar audio setelah klik:", error);
            });
        }
    }, { once: true }); // Event hanya berjalan sekali
};