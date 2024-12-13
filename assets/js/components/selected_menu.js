const navbarListDOM = document.querySelector('.navbar__list');
const navbarLinksDOM = document.querySelectorAll('.navbar__link');
const sectionsDOM = document.querySelectorAll('section');

function activeMenu() {
	window.addEventListener('scroll', () => {
		const scrollPosition = window.scrollY + 100;

		sectionsDOM.forEach((section, index) => {
			if (
				scrollPosition >= section.offsetTop &&
				scrollPosition < section.offsetTop + section.offsetHeight
			) {
				const activeLink = navbarListDOM.querySelector('.navbar__link.active');

				if (activeLink) {
					activeLink.classList.remove('active');
				}

				navbarLinksDOM[index].classList.add('active');
			}
		});
	});
}

export default activeMenu;
