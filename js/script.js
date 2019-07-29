var form = document.querySelector('#registro');

form.addEventListener('submit', function(event) {
	if (form.checkValidity() == false) {
		event.preventDefault();
		event.stopPropagation();
	}
	form.classList.add('was-validated');
});

