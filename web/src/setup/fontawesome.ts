import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
	faTrash, faCheck, faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
	faNpm, faGithub,
} from '@fortawesome/free-brands-svg-icons';

library.add(
	faTrash, faCheck, faTimes,
	faNpm, faGithub,
);

export default FontAwesomeIcon;
