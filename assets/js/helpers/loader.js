const loaderContainer = document.querySelector('.loader');

function loader() {
	window.addEventListener('load', () => {
		loaderContainer.classList.add('loader--hidden');
	});
}

export default loader;
