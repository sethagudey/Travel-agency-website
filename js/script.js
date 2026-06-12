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
const modal = document.getElementById("confirmationModal");
const bookingIdText = document.getElementById("bookingId");

const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

function generateBookingID() {
return "TWX-" + Math.floor(Math.random() * 1000000);
}

function closeModal() {
modal.style.display = "none";
}

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

/* SHOW MODAL */
bookingIdText.innerText = "Your Booking ID: " + bookingID;
modal.style.display = "flex";

/* WHATSAPP MESSAGE */
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

});
