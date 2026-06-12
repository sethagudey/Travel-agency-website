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


/* ================= TESTIMONIAL SLIDER ================= */
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
testimonials.forEach((t, i) => {
t.classList.remove("active");
if (i === index) t.classList.add("active");
});
}

setInterval(() => {
currentTestimonial++;
if (currentTestimonial >= testimonials.length) currentTestimonial = 0;
showTestimonial(currentTestimonial);
}, 4000);


/* ================= FAQ ACCORDION ================= */
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
item.addEventListener("click", () => {
item.classList.toggle("active");
});
});


/* ================= COUNTER ANIMATION ================= */
const counters = document.querySelectorAll(".counter");

function animateCounters() {
counters.forEach(counter => {
const updateCount = () => {
const target = +counter.innerText;
const count = +counter.getAttribute("data-count") || target;

let current = +counter.innerText;

const increment = target / 100;

if (current < target) {
counter.innerText = Math.ceil(current + increment);
setTimeout(updateCount, 20);
} else {
counter.innerText = target;
}
};

counter.innerText = "0";
updateCount();
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


/* ================= GOOGLE SHEETS BOOKING ================= */
const form = document.getElementById("bookingForm");

// 🔴 REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT URL
const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

form.addEventListener("submit", async (e) => {
e.preventDefault();

const formData = {
name: form.name.value,
email: form.email.value,
phone: form.phone.value,
destination: form.destination.value,
travelDate: form.travelDate.value,
travelers: form.travelers.value,
message: form.message.value
};

try {
const response = await fetch(SCRIPT_URL, {
method: "POST",
body: JSON.stringify(formData)
});

const result = await response.json();

if (result.success) {
alert("Booking submitted successfully!");
form.reset();
} else {
alert("Something went wrong. Try again.");
}

} catch (error) {
alert("Network error. Please try again.");
console.error(error);
}
});

});
