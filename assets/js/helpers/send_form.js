const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const closeButttonDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

closeButttonDOM.addEventListener('click', closeModal);

function sendEmail() {
	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();
		const params = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value,
		};

		if (params.name && params.email && params.message && params.subject) {
			emailjs.send('service_pqorhic', 'template_1471pb4', params).then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					openModal();
				},
				(error) => {
					console.log('FAILED...', error);
				},
			);
		}
	});
}

export default sendEmail;
