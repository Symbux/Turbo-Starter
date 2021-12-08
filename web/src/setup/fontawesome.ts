import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
	faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

import {
	faNpm, faGithub,
} from '@fortawesome/free-brands-svg-icons';

library.add(
	faCodeBranch,
	faNpm,
	faGithub,
);

export default FontAwesomeIcon;
