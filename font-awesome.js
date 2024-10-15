import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faHome, faInfo, faCoffee, faBars, faXmark, faPlus, faArrowRight, faArrowDown, faEnvelope, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faFacebook, faYoutube, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(
    faSearch, faHome, faInfo, faCoffee, faBars, 
    faXmark, faPlus, faArrowRight, faArrowDown, 
    faEnvelope, faShareAlt, faLinkedin, faXTwitter, 
    faFacebook, faYoutube, faInstagram, faTiktok, 
    faWhatsapp
);

export { FontAwesomeIcon };
