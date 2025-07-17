import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyRightYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import changeLang from './helpers/languaje.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import skillsCardsAnimation from './components/skills_cards_animation.js';

loader();
resetToHome();
parallax();
activeMenu();
updateCopyRightYear();
sendEmail();
changeLang();
skillsCardsAnimation();
