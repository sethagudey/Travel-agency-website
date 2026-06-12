document.addEventListener("DOMContentLoaded", () => {

/* ================= HERO SLIDER ================= */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.remove("active");
if (i === index) slide.classList.add("active");
});
}

setInterval(() => {
currentSlide++;
if (currentSlide >= slides.length) currentSlide = 0;
showSlide(currentSlide);
}, 5000);


/* ================= TESTIMONIAL SLIDER (FIXED) ================= */
const testimonials = document.querySelectorAll(".testimonial");
const track = document.querySelector(".testimonial-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// CREATE DOTS
if (dotsContainer) {
testimonials.forEach((_, i) => {
const dot = document.createElement("span");
dot.classList.add("dot");
if (i === 0) dot.classList.add("active");

dot.addEventListener("click", () => {
goToSlide(i);
});

dotsContainer.appendChild(dot);
});
}

const dots = document.querySelectorAll(".dot");

function updateSlider() {
if (!track) return;

track.style.transform = `translateX(-${index * 100}%)`;

dots.forEach(dot => dot.classList.remove("active"));
if (dots[index]) dots[index].classList.add("active");
}

function goToSlide(i) {
index = i;
updateSlider();
}

function nextSlide() {
index++;
if (index >= testimonials.length) index = 0;
updateSlider();
}

function prevSlide() {
index--;
if (index < 0) index = testimonials.length - 1;
updateSlider();
}

if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlide);

// AUTO PLAY
setInterval(nextSlide, 5000);

// TOUCH SUPPORT
let startX = 0;

if (track) {
track.addEventListener("touchstart", e => {
startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
let endX = e.changedTouches[0].clientX;

if (startX > endX + 50) nextSlide();
if (startX < endX - 50) prevSlide();
});
}


/* ================= FAQ ================= */
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
item.addEventListener("click", () => {
item.classList.toggle("active");
});
});


/* ================= COUNTERS ================= */
const counters = document.querySelectorAll(".counter");

function animateCounters() {
counters.forEach(counter => {
const target = +counter.innerText;
let current = 0;

const update = () => {
const increment = target / 100;

if (current < target) {
current += increment;
counter.innerText = Math.ceil(current);
setTimeout(update, 20);
} else {
counter.innerText = target;
}
};

update();
});
}

animateCounters();


/* ================= BACK TO TOP ================= */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
if (window.scrollY > 400) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
});

topBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});


/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
});
});
});

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});
/* ================= GOOGLE SHEETS BOOKING ================= */
const form = document.getElementById("bookingForm");
const modal = document.getElementById("confirmationModal");
const bookingIdText = document.getElementById("bookingId");

// 🔴 REPLACE THIS WITH YOUR REAL SCRIPT URL
const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

function generateBookingID() {
return "TWX-" + Math.floor(Math.random() * 1000000);
}

function closeModal() {
if (modal) modal.style.display = "none";
}

if (form) {
form.addEventListener("submit", async (e) => {
e.preventDefault();

const bookingID = generateBookingID();

const formData = {
bookingID,
package: form.package.value,
name: form.name.value,
email: form.email.value,
phone: form.phone.value,
travelDate: form.travelDate.value,
travelers: form.travelers.value,
message: form.message.value
};

try {
await fetch(SCRIPT_URL, {
method: "POST",
body: JSON.stringify(formData)
});

if (bookingIdText) {
bookingIdText.innerText = "Your Booking ID: " + bookingID;
}

if (modal) {
modal.style.display = "flex";
}

const whatsappMessage =
`Hello Tourwallex, I just booked a trip!

Booking ID: ${bookingID}
Package: ${form.package.value}
Name: ${form.name.value}
Date: ${form.travelDate.value}
Travelers: ${form.travelers.value}`;

window.open(
`https://wa.me/233000000000?text=${encodeURIComponent(whatsappMessage)}`,
"_blank"
);

form.reset();

} catch (error) {
alert("Booking failed. Please try again.");
console.error(error);
}
});
}

});
