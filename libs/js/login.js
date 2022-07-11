var inputs =document.getElementsByTagName('input');

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
            url: 'libs/db/login.php',
            data: parametros,
            success: function(resp) {                 
                if(resp=="")
                alert("usuario o contraseña incorrectos.");                                
                else if (resp == 'ADMIN') {                    
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
       alert("favor de rellenar todos los campos");
    }    
}

function mostrar(){        
    var eye = document.getElementById('Eye');
    var cont = document.getElementById('contrasena');
    if(cont.type == "password"){
    cont.type = "text";
    eye.className = "icon ion-md-eye-off ico";
    }
    else{
        cont.type = "password";
        eye.className = "icon ion-md-eye ico";
    }
}

$("#usuario").keypress(function(e) {
    if(e.which == 13) {
       // Acciones a realizar, por ej: enviar formulario.
       iniciarSesion();
      
    }
 });
 
$("#contrasena").keypress(function(e) {
    if(e.which == 13) {
       // Acciones a realizar, por ej: enviar formulario.
       iniciarSesion();
      
    }
 });