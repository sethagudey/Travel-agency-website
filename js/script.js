document.addEventListener("DOMContentLoaded", () => {

/* NAV */
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});

/* HERO SLIDER */
const slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
slides.forEach(s => s.classList.remove("active"));
i = (i + 1) % slides.length;
slides[i].classList.add("active");
}, 5000);

/* BOOKING (Google Sheets ready later) */
const form = document.getElementById("bookingForm");

if (form) {
form.addEventListener("submit", (e) => {
e.preventDefault();
alert("Booking submitted successfully!");
form.reset();
});
}

});
