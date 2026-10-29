// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

import names from './4-names.js';
import sayHi from './5-utils.js';
import {items, singlePerson} from  './6-alternative-flavor.js';
import './7-mind-grenade.js';

console.log(items);
console.log(singlePerson);


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);