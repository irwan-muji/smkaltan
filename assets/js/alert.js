// Function to close the alert
function closeAlert() {
  const alert = document.getElementById("customAlert");
  alert.classList.remove("show");
  setTimeout(() => (alert.style.display = "none"), 400);
}

// Function to show the alert
function showAlert(message) {
  const alert = document.getElementById("customAlert");
  alert.querySelector(".alert-message").textContent = message;
  alert.style.display = "flex";
  setTimeout(() => alert.classList.add("show"), 10);
}
//Direct ke WhatsApp
function redirectToWhatsApp() {
  const phoneNumber = "081215327658"; // Ganti dengan nomor WhatsApp Anda
  const message =
    "Selamat siang, saya ingin mendapatkan informasi lebih lanjut mengenai pendaftaran sekolah SMK Al Hikmah Tanon!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
}
