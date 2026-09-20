const dateElement = document.querySelector("[data-clock-date]");
const timeElement = document.querySelector("[data-clock-time]");

function updateClock() {
	if (!dateElement || !timeElement) return;

	const now = new Date();
	const dateFormatter = new Intl.DateTimeFormat("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long",
	});
	const timeFormatter = new Intl.DateTimeFormat("en-GB", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});

	dateElement.textContent = dateFormatter.format(now);
	timeElement.textContent = timeFormatter.format(now);
	timeElement.setAttribute("datetime", now.toISOString());
}

updateClock();
setInterval(updateClock, 1000);

const slider = document.querySelector("[data-testimonial-slider]");

if (slider) {
	const slides = [...slider.querySelectorAll("[data-testimonial-slide]")];
	const dots = [...slider.querySelectorAll("[data-testimonial-dot]")];
	const previousButton = slider.querySelector("[data-testimonial-prev]");
	const nextButton = slider.querySelector("[data-testimonial-next]");
	let currentIndex = 0;

	function showSlide(index) {
		currentIndex = (index + slides.length) % slides.length;

		slides.forEach((slide, slideIndex) => {
			slide.classList.toggle("is-active", slideIndex === currentIndex);
		});

		dots.forEach((dot, dotIndex) => {
			dot.classList.toggle("is-active", dotIndex === currentIndex);
		});
	}

	previousButton?.addEventListener("click", () => showSlide(currentIndex - 1));
	nextButton?.addEventListener("click", () => showSlide(currentIndex + 1));
	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => showSlide(index));
	});
}
