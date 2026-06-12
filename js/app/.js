document.addEventListener("DOMContentLoaded", () => {

/* ================= MOBILE NAV ================= */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
toggle.addEventListener("click", () => {
menu.classList.toggle("active");
});
}

/* ================= HERO SLIDER ================= */
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
let i = 0;

setInterval(() => {
slides.forEach(s => s.classList.remove("active"));
i = (i + 1) % slides.length;
slides[i].classList.add("active");
}, 5000);
}

/* ================= TESTIMONIAL SLIDER ================= */
const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {
let t = 0;

setInterval(() => {
testimonials.forEach(x => x.classList.remove("active"));
t = (t + 1) % testimonials.length;
testimonials[t].classList.add("active");
}, 4000);
}

/* ================= DYNAMIC TOURS SYSTEM ================= */
const tourGrid = document.getElementById("tourGrid");

const tours = [
{
title: "Dubai Luxury Escape",
price: "$1200",
days: "5 Days",
type: "luxury"
},
{
title: "Bali Adventure Trip",
price: "$900",
days: "7 Days",
type: "adventure"
},
{
title: "Paris Romantic Getaway",
price: "$1500",
days: "6 Days",
type: "luxury"
}
];

function renderTours(list) {
if (!tourGrid) return;

tourGrid.innerHTML = "";

list.forEach(tour => {
const card = document.createElement("div");
card.className = "card glass";

card.innerHTML = `
<h3>${tour.title}</h3>
<p>${tour.days}</p>
<strong>${tour.price}</strong>
<br>
<a href="booking.html" class="btn">Book Now</a>
`;

tourGrid.appendChild(card);
});
}

/* INITIAL RENDER */
renderTours(tours);

/* ================= TOUR FILTER (USED IN TOURS PAGE) ================= */
window.filterTours = function(type) {
if (type === "all") {
renderTours(tours);
return;
}

const filtered = tours.filter(t => t.type === type);
renderTours(filtered);
};

/* ================= SEARCH (TOURS PAGE) ================= */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
searchInput.addEventListener("input", (e) => {
const value = e.target.value.toLowerCase();

const filtered = tours.filter(t =>
t.title.toLowerCase().includes(value)
);

renderTours(filtered);
});
}

/* ================= BOOKING SYSTEM ================= */
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
bookingForm.addEventListener("submit", (e) => {
e.preventDefault();

const bookingID = "TWX-" + Math.floor(Math.random() * 1000000);

const data = {
id: bookingID,
name: bookingForm.name?.value,
email: bookingForm.email?.value,
phone: bookingForm.phone?.value,
package: bookingForm.package?.value,
date: bookingForm.date?.value,
people: bookingForm.people?.value,
message: bookingForm.message?.value
};

/* SAVE LOCAL (mini CMS) */
localStorage.setItem(bookingID, JSON.stringify(data));

alert("Booking Confirmed! ID: " + bookingID);

/* WHATSAPP NOTIFICATION */
const msg =
`New Booking:
ID: ${bookingID}
Name: ${data.name}
Package: ${data.package}
Date: ${data.date}
Travelers: ${data.people}`;

window.open(
`https://wa.me/233000000000?text=${encodeURIComponent(msg)}`,
"_blank"
);

bookingForm.reset();
}
);
}

/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener("submit", (e) => {
e.preventDefault();

const data = {
name: contactForm.name?.value,
email: contactForm.email?.value,
message: contactForm.message?.value
};

localStorage.setItem("contact_" + Date.now(), JSON.stringify(data));

alert("Message sent successfully!");

contactForm.reset();
});
}

});
