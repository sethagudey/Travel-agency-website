document.addEventListener("DOMContentLoaded", () => {

/* ================= MOBILE MENU ================= */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
menu.classList.toggle("active");
});

/* ================= HERO SLIDER ================= */
const slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
slides.forEach(s => s.classList.remove("active"));
i = (i + 1) % slides.length;
slides[i].classList.add("active");
}, 5000);

/* ================= TESTIMONIALS ================= */
const testimonials = document.querySelectorAll(".testimonial");
let t = 0;

setInterval(() => {
testimonials.forEach(x => x.classList.remove("active"));
t = (t + 1) % testimonials.length;
testimonials[t].classList.add("active");
}, 4000);

});
