import 'assets/sass/base.scss';

import $ from 'jquery';

// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
import 'bootstrap';

// Fire when the initial HTML document has been completely loaded and parsed.
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('base.js');
});
