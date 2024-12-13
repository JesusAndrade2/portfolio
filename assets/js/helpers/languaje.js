const langToggleDom = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('index-en.html');
langToggleDom.checked = currentLang;

function changeLang() {
	langToggleDom.addEventListener('change', () => {
		if (langToggleDom.checked) {
			window.location.href = 'index-en.html';
		} else {
			window.location.href = 'index.html';
		}
	});
}

export default changeLang;
