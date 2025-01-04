// Menampilkan tombol kembali ke atas saat scroll
window.onscroll = function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block"; // Tampilkan tombol
    } else {
        scrollToTopButton.style.display = "none"; // Sembunyikan tombol
    }
};

// Fungsi untuk kembali ke atas saat tombol diklik
document.querySelector('.scroll-to-top').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Scroll halus ke atas
};