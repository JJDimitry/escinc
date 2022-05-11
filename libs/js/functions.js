function iniciarSesion() {    
    var usuario = $('#usuario').val();
    var contrasena = $('#contrasena').val();
    if (usuario.length > 0 && contrasena.length > 0) {        
        contrasena = hex_md5(contrasena);
        var parametros = {
            "USUARIO": usuario,
            "CONTRASENA": contrasena
        };        
        $.ajax({
            method: 'POST',
            url: 'libs/db/login2.php',
            data: parametros,
            success: function(resp) {                      
                if (resp == 'Sesion trabajador') {
                  location.href = 'Principal/inicio.php';
                } else if(resp == 'Sesion administrador'){                  
                    location.href = 'Principal/igeneral.php';
                } else{
                    $('.campovacio').addClass('d-none');
                    $('.datoincorrecto').removeClass('d-none');
                }
            }
        });
    } else {
       $('.datoincorrecto').addClass('d-none');
      $('.campovacio').removeClass('d-none');
    }    
}

function user(){
    var nombre = $("#nombre").val();
    var imagen = $("#imagen").val();
    $('#user').text(nombre);
    var image = new Image();
    image.src = imagen;                          
    foto.setAttribute("src", imagen);
}

function DestruirSesion()
{
    location.href = "../libs/db/cerrar.php";
}
