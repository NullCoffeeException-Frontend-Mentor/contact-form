const contactForm = document.querySelector('#contact-form');

const querys = document.querySelectorAll('input[name="query-type"]');
const warningQuery = document.querySelector('#warning-query');

const checkbox = document.querySelector('#contact-checkbox');
const warningCheckbox = document.querySelector('#warning-checkbox');

const submitButton = document.querySelector('#btn-submit');

const modal = document.querySelector('#modal');


submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    contactForm.classList.add("submitted-form");
    const selectedQuery = document.querySelector('input[name="query-type"]:checked');

    if (!selectedQuery) {
        warningQuery.classList.add("warning-message-show");
    }

    if (!checkbox.checked) {
        warningCheckbox.classList.add("warning-message-show");
    }

    if (contactForm.checkValidity()) {
        modal.classList.add('modal-show');
        contactForm.classList.remove("submitted-form");
        contactForm.reset();
    }
})

querys.forEach((query) => {
    query.addEventListener('change', function() {
        warningQuery.classList.remove("warning-message-show");
    })
})

checkbox.addEventListener('change', function(){
    warningCheckbox.classList.remove("warning-message-show");
})