$(document).ready(function () {
    cargarUsuarios();
});



function cargarUsuarios(){

  var requestOptions = {
    method: 'GET'
  };

  fetch("http://localhost:8081/paciente/", 
  requestOptions 
  ).then(function (res) {
    return res.text();
  }).then(function (data) {

    let response = {};

    try {
        response = JSON.parse(data);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'se cyo la weaaaaa!'
      })
      return;
    }

    let listadoHtml = ''
    for (let usuario of response) {
      let botonEliminar = "<a href=\"#\" onclick='eliminarUsuario(" + JSON.stringify(usuario) + ")' class=\"btn btn-danger btn-circle btn-sm\"><i class=\"fas fa-trash\"></i></a>";

      let usuarioHtml = '  <tr><td>' + usuario.nombre + '</td><td>' + usuario.rut + '</td><td>'
        + usuario.direccion + '</td><td>' + usuario.telefono + '</td><td>' + usuario.email + '</td><td>' + botonEliminar + '</td></tr>'

      listadoHtml += usuarioHtml
    }
    document.querySelector("#usuarios tbody").outerHTML = listadoHtml;
      
  }.bind(this));
}

function eliminarUsuario(usuario){


  Swal.fire({
    title: 'Estas seguro que desea eliminar al pendejo ('+usuario.nombre+')?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',

  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        var requestOptions = {
          method: 'DELETE'
        };

    fetch("http://localhost:8081/paciente/"+ usuario.id, 
    requestOptions 
    ).then(function (res) {
      return res.text();
    }).then(function (data) {

      let response = {};

      try {
          response = JSON.parse(data);
      } catch (e) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'se cyo la weaaaaa!'
        })
        return;
      }

      if (response.estado === 'ok') {

        cargarUsuarios();

        Swal.fire({
          icon: 'success',
          title: '',
          html: response.mensaje
        })

      }else {
        
        var mensaje = "Error en la solicitud, intente mas tarde.";

        if (response.mensaje) mensaje = response.mensaje;

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: mensaje
        })
        }
        
    }.bind(this));

    } else if (result.isDenied) {

      Swal.fire('Changes are not saved', '', 'info')

    }
  })

}