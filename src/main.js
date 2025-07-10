// const burger = document.querySelector(".header__burger");
// const mobileNav = document.querySelector(".header-nav-mobile");

// burger.addEventListener("click", () => {
//   mobileNav.classList.toggle("nav--visible");
// });

document.addEventListener("DOMContentLoaded", () => {
	const burgerMenuBtn = document.querySelector(".burger-btn");
	const burgerMenu = document.querySelector(".burger-menu");
	const burgerBlock = document.querySelector(".burger-block");
	const burgerContacts = document.querySelector(".burger-menu");

	burgerMenuBtn.addEventListener("click", () => {
		burgerMenu.classList.toggle("show-items");
		document.body.style.overflow = burgerMenu.classList.contains("show-items")
			? "hidden"
			: "auto";
	});

	document.addEventListener("click", (e) => {
		const isMenuOpen = burgerMenu.classList.contains("show-items");

		const clickInsideMenu =
			burgerBlock.contains(e.target) ||
			burgerContacts.contains(e.target) ||
			burgerMenuBtn.contains(e.target);

		if (isMenuOpen && !clickInsideMenu) {
			burgerMenu.classList.remove("show-items");
			document.body.style.overflow = "auto";
		}
	});

	// const anchorLinks = document.querySelectorAll('.burger-menu a[href^="#"]');

	// anchorLinks.forEach((link) => {
	// 	link.addEventListener("click", () => {
	// 		if (burgerMenu.classList.contains("show-items")) {
	// 			burgerMenu.classList.remove("show-items");
	// 			setTimeout(() => {
	// 				document.body.style.overflow = "auto";
	// 			}, 200);
	// 		}
	// 	});
	// });


  // Слайдер

	const leftBtn = document.querySelector(".left-btn");
	const rightBtn = document.querySelector(".right-btn");
	const sliderTrack = document.querySelector(".slider-track");

	function slide(direction) {
		if (direction === "left") {
			const last = sliderTrack.lastElementChild;
			sliderTrack.prepend(last);
		} else if (direction === "right") {
			const first = sliderTrack.firstElementChild;
			sliderTrack.appendChild(first);
		}
	}

	if (leftBtn && rightBtn) {
		leftBtn.addEventListener("click", () => slide("left"));
		rightBtn.addEventListener("click", () => slide("right"));
	}

	let startX = 0;
	let isSwiping = false;

	sliderTrack.addEventListener("touchstart", (e) => {
		startX = e.touches[0].clientX;
		isSwiping = true;
	});

	sliderTrack.addEventListener("touchmove", (e) => {
		if (!isSwiping) return;
		const currentX = e.touches[0].clientX;
		const diffX = currentX - startX;
		if (Math.abs(diffX) > 10) e.preventDefault();
	});

	sliderTrack.addEventListener("touchend", (e) => {
		if (!isSwiping) return;
		isSwiping = false;

		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;

		if (Math.abs(diffX) > 50) {
			slide(diffX > 0 ? "left" : "right");
		}
	});


	// отправка формы и очистка

	const form = document.querySelector(".form-data-block");
	const popup = document.getElementById("form-popup");

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		form.reset();

		popup.style.display = "block";

		setTimeout(() => {
			popup.style.display = "none";
		}, 3000);
	});
});
