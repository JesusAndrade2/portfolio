const copyrightElementDOM = document.querySelector('.footer__copy span');
const currentYear = new Date().getFullYear();

function updateCopyRightYear() {
	copyrightElementDOM.textContent = `${currentYear} `;
}

export default updateCopyRightYear;
