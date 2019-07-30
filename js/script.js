      var form1 = document.querySelector('#busqueda');

      form1.addEventListener('submit', function(event) {
        if (form1.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form1.classList.add('was-validated');
      })

      var form2 = document.querySelector('#form');

      form2.addEventListener('submit', function(event) {
        if (form2.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form2.classList.add('was-validated');
      })