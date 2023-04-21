// Clear Input Placeholder on Focus
var myInput     = document.querySelectorAll('input'),
    myTextArea  = document.querySelector('textarea');

for (var i = 0; i < myInput.length; i++) {

    (function () {

        'use strict';

        var input   = myInput[i],
            innerPh = input.placeholder;

        input.onfocus = function () {

            'use strict';
    
            this.placeholder = '';
    
        }
    
        input.onblur = function () {
    
            'use strict';

            if (this.value === '') {
                this.placeholder = innerPh;
            }
    
        }
    
    })();

}

myTextArea.onfocus = function () {

    'use strict';

    // Make Backup Placeholder
	myTextArea.setAttribute('data-type', myTextArea.getAttribute('placeholder'));

    this.placeholder = '';

}

myTextArea.onblur = function () {

    'use strict';

    // Use Backup Placeholder
	myTextArea.setAttribute('placeholder', myTextArea.getAttribute('data-type'));

    this.setAttribute('data-type', '');

}

/* Calculate Textarea Characters */
var mySpan = document.getElementById('myspan'),
	myTextArea = document.getElementById('message'),
	maxLength = myTextArea.getAttribute('maxlength');


myTextArea.oninput = function () {

	'use strict';

	mySpan.textContent = maxLength - this.value.length;

}


window.onload = function () {

	'use strict';

    // Clear Textarea Onload
	myTextArea.value = '';

    // Clear Input Onload
    for (var i = 0; i < myInput.length; i++) {
        myInput[i].value = '';
    }

}