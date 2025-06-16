window.addEventListener("DOMContentLoaded", () => {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
});

// Efecto en el enlace de WhatsApp
const whatsapp = document.querySelector('a[href*="wa.me"]');
if (whatsapp) {
  whatsapp.addEventListener("click", () => {
    whatsapp.style.transform = "scale(1.2)";
    setTimeout(() => {
      whatsapp.style.transform = "scale(1)";
    }, 300);
  });
}
