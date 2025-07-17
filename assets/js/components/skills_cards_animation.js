function skillsCardsAnimation() {
	const cards = document.querySelectorAll('.skills__cards-container');
	let current = 0;

	function toggleCards() {
		cards.forEach((card, idx) => (card.open = idx === current));
		current = (current + 1) % cards.length;
	}

	setInterval(toggleCards, 5000); // Cambia cada 2 segundos
}

export default skillsCardsAnimation;
