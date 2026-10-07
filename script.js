// ===============================
// CONFIGURACIÓN RÁPIDA
// ===============================

// Fecha del evento.
// Formato: AAAA-MM-DDTHH:MM:SS
const EVENT_DATE = "2027-10-16T20:00:00";

// IMPORTANTE:
// Reemplaza este número por el WhatsApp oficial de la organización.
// Debe incluir código de país SIN "+" y sin espacios.
// Ejemplo Perú: 51999999999
const WHATSAPP_NUMBER = "51939367684";


// ===============================
// CUENTA REGRESIVA
// ===============================
const targetDate = new Date(EVENT_DATE).getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = "000";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(3, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ===============================
// MENÚ MÓVIL
// ===============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});


// ===============================
// COPIAR CUENTA / CCI
// ===============================
const toast = document.getElementById("toast");

document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      showToast("Copiado al portapapeles");
    } catch {
      showToast("No se pudo copiar automáticamente");
    }
  });
});

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}


// ===============================
// CONFIRMACIÓN POR WHATSAPP
// ===============================
const rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (WHATSAPP_NUMBER === "51999999999") {
    alert("Antes de usar el formulario, configura el número de WhatsApp en script.js");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const section = document.getElementById("section").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const city = document.getElementById("city").value.trim();
  const status = document.getElementById("status").value;
  const message = document.getElementById("message").value.trim();

  const text = [
    "🎓 *BODAS DE PLATA EXAFAM 2002*",
    "",
    "Deseo registrar mi participación:",
    "",
    `👤 *Nombre:* ${name}`,
    `🏫 *Sección:* ${section || "No indicado"}`,
    `📱 *Teléfono:* ${phone || "No indicado"}`,
    `📍 *Ciudad:* ${city || "No indicada"}`,
    `✅ *Estado:* ${status}`,
    message ? `💬 *Mensaje:* ${message}` : "",
    "",
    "Nos vemos en nuestro gran reencuentro 2027."
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});


// ===============================
// BOTÓN FLOTANTE DE WHATSAPP
// ===============================
const whatsappFloat = document.getElementById("whatsappFloat");

whatsappFloat.addEventListener("click", (event) => {
  if (WHATSAPP_NUMBER === "51999999999") {
    event.preventDefault();
    alert("Configura el número de WhatsApp en script.js");
    return;
  }

  const text = "Hola, deseo información sobre las Bodas de Plata EXAFAM 2002.";
  whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
});
