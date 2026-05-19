// Feather Icons
feather.replace();

// Fungsi Alert
function initAlert() {
    const alertBox = document.getElementById("customAlert");
    if (!alertBox) {
        console.log("Alert element not found");
        return;
    }
    
    console.log("Alert ditemukan, menampilkan...");
    
    // Tampilkan alert setelah 0.5 detik
    setTimeout(() => {
        alertBox.classList.add("show");
        console.log("Alert ditampilkan");
        
        // Sembunyikan setelah 3 detik
        setTimeout(() => {
            alertBox.classList.remove("show");
            console.log("Alert disembunyikan");
        }, 3000);
    }, 500);
    
    // Klik untuk tutup
    alertBox.addEventListener('click', () => {
        alertBox.classList.remove("show");
        console.log("Alert ditutup manual");
    });
}

// Jalankan saat halaman selesai loading
document.addEventListener('DOMContentLoaded', function() {
    initAlert();
});