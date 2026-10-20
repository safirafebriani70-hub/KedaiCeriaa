// ==================== KONFIGURASI DATA ====================
// Menyimpan nomor WhatsApp dalam satu konstanta tunggal
const NOMOR_WA = "6285646641319";

// ==================== RUN SETELAH DOM SIAP ====================
document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. OTOMATISASI LINK WHATSAPP ---
    
    // Pesan default untuk tombol WA umum (Header, Hero, Kontak, Float)
    const pesanUmum = encodeURIComponent("Halo Kedai Ceria, saya mau tanya/pesan jajanan.");
    const urlWaUmum = `https://wa.me/${NOMOR_WA}?text=${pesanUmum}`;

    // Terapkan URL WA umum ke semua elemen bertag .btn-wa-umum
    const tombolWaUmum = document.querySelectorAll(".btn-wa-umum");
    tombolWaUmum.forEach(function (tombol) {
        tombol.href = urlWaUmum;
        tombol.target = "_blank";
        tombol.rel = "noopener noreferrer";
    });

    // Terapkan URL WA spesifik ke tombol "Pesan" pada setiap kartu produk
    const tombolWaProduk = document.querySelectorAll(".btn-wa-produk");
    tombolWaProduk.forEach(function (tombol) {
        const namaProduk = tombol.getAttribute("data-produk");
        const pesanProduk = encodeURIComponent(`Halo Kedai Ceria, saya mau pesan ${namaProduk}`);
        tombol.href = `https://wa.me/${NOMOR_WA}?text=${pesanProduk}`;
        tombol.target = "_blank";
        tombol.rel = "noopener noreferrer";
    });

    // --- 2. TOGGLE MENU MOBILE (HP) ---
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        // Tutup menu otomatis setelah salah satu link navigasi diklik
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }
});