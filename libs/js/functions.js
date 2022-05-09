/*function login(){
    var user= $('#user').val();
    var user= user.toUpperCase();
    var passwd= $('#passwd').val();
    passwd = hex_md5(passwd);
    alert(user + " y " + passwd);
    if(user != "" && passwd != ""){
        $.ajax({        
            data: {user:user, passwd:passwd},
            url: "libs/db/login.php",                    
            dataType: "JSON",        
            type: "POST"
            }).done(function(resp){
                if(resp != "NHR"){                                         
                                      alert(resp);                               
                    alert(resp[0]['Nombre']);         
                    alert(resp[0]['img']);         
                    alert(resp[0]['TipoUsuario']);                   
                    location.href = 'Principal/inicio.php';                                         
                }
                else
                alert("No Hay Registro");
            });
    }
    else{
        alert("todo mal");
    }
} */

function iniciarSesion() {
    alert("here");
    var usuario = $('#usuario').val();
    var contrasena = $('#contrasena').val();
    if (usuario.length > 0 && contrasena.length > 0) {        
        contrasena = hex_md5(contrasena);
        var parametros = {
            "USUARIO": usuario,
            "CONTRASENA": contrasena
        };
        alert(usuario + " y " + contrasena);
        $.ajax({
            method: 'POST',
            url: 'libs/db/login2.php',
            data: parametros,
            success: function(resp) {
                alert(resp);
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

function DestruirSesion()
{
    location.href = "../libs/db/cerrar.php";
}
