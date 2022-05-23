function iniciarSesion() {    
    var usuario = $('#usuario').val();
    var contrasena = $('#contrasena').val();
    if (usuario.length > 0 && contrasena.length > 0) {        
        contrasena = hex_md5(contrasena);
        var parametros = {
            "USUARIO": usuario,
            "CONTRASENA": contrasena
        };        
        alert(contrasena);
        $.ajax({
            method: 'POST',
            url: 'libs/db/login2.php',
            data: parametros,
            success: function(resp) {                                     
                if (resp == 'ADMIN') {
                  location.href = 'Principal/admin/inicio.php';
                } else if(resp == 'DIRPOP' || resp == 'DIRPART' || resp == 'DIREXT'){                  
                    location.href = 'Principal/directores/inicio.php';
                } else if(resp == 'DOCPOP' || resp == 'DOCPART' || resp == 'DOCEXT'){                  
                    location.href = 'Principal/docentes/inicio.php';
                }else{
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
    var extension = "<img id='foto' class='img-fluid rounded-circle avatar ms-2'> ";
    $('#user').html(extension + nombre);    
    var image = new Image();
    image.src = imagen;                          
    foto.setAttribute("src", imagen);
}

function DestruirSesion()
{
    location.href = "../../libs/db/cerrar.php";
}
