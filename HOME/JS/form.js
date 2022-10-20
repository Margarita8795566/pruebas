

  const submit = document.querySelector('#submit');
  
  const crear = async () => {
  
    let nombre = document.getElementById("nombre").value
    let rut = document.getElementById("rut").value
    let telefono = document.getElementById("telefono").value
    let direccion = document.getElementById("direccion").value
    let email = document.getElementById("email").value
    // document.getElementById("myForm").reset();
  
    fetch('http://localhost:8081/paciente', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre,
        rut: rut,
        telefono: telefono,
        direccion: direccion,
        email: email
  
      })
    }).then(function (res) {
      return res.text();
    }).then(function (data) {
  
        let response = {};
  
        try {
            response = JSON.parse(data);
        } catch (e) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'se cyo la weaaaaa!',
          })
          return;
        }
  
        if (response.estado === 'ok') {
  
          document.getElementById("myForm").reset();
  
         /* Swal.fire({
            icon: 'success',
            title: '',
            html: response.mensaje
          })*/

          swal({
            title: "",
            text: response.mensaje,
            icon: "success",
          });
  
        }else if (response.estado === 'info') {
          /*Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: response.mensaje
          })*/

          swal({
            title: "",
            text: response.mensaje,
            icon: "error",
          });
  
        }else {
         /* Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.mensaje
          })*/

          swal({
            title: "",
            text: response.mensaje,
            icon: "error",
          });
        }
  
    }.bind(this));
  
  
  }
  
  submit.addEventListener('click', crear);