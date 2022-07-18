function login() {    
    var usuario = $('#usuario').val()
    var contrasena = $('#cont1').val()
            
    if (usuario.length > 0 && contrasena.length > 0) { 
        contrasena = hex_md5(contrasena)               
        var parametros = {
            "USUARIO": usuario,
            "CONTRASENA": contrasena
        }
        ajax(parametros)
    }
    else 
       alert("favor de rellenar todos los campos.")    
}

function cedula(){
    var ced = $('#cedpro').val()
    if (ced == "")
        alert("escriba su cedula profesional")
    else{            
        alert("Si su cedula se encuentra registrada le llegara un mensaje a su correo. Favor de revisar la carpeta de spam tambien.");                    
        $('#exampleModal').modal('hide')
        $('#cedpro').val(null)
    }
 }

function msj(){
    $('#exampleModal').modal('hide')        
    $('#exampleModal2').modal('show')    
    $('#cedpro').val(null)
}

function cancelar(){
    $('#user').val(null)
    $('#cont2').val(null)
    $('#cont3').val(null)
    $('#cont4').val(null)
    $('#exampleModal2').modal('hide')
}
function login2(){
    var user = $('#user').val()
    var cont2 = $('#cont2').val()
    var cont3 = $('#cont3').val()
    var cont4 = $('#cont4').val()
    
    if(user == "" || cont2 == "" || cont3 == "" || cont4 == "")
        alert("Favor de rellenar todos los campos.")
    else if(cont3 != cont4)
        alert("Las contraseñas no coinciden")
    else{
        alert("Todo bien")
    }
}

function mostrar(a){            
    var eye = document.getElementById('Eye' + a)
    var cont = document.getElementById('cont'+ a)
    if(cont.type == "password"){
    cont.type = "text";
    eye.className = "icon ion-md-eye-off ico"
    }
    else{
        cont.type = "password";
        eye.className = "icon ion-md-eye ico"
    }
}

$("#usuario").keypress(function(e) {
    if(e.which == 13) {       
       login()      
    }
 })
 
$("#cont1").keypress(function(e) {
    if(e.which == 13) {
       login()      
    }
 })
 
function ajax(parametros){
    $.ajax({
        method: 'POST',
        url: 'libs/db/login.php',
        data: parametros,
        success: function(resp) {                 
            if(resp=="")
            alert("usuario o contraseña incorrectos.");                                
            else if (resp == 'ADMINISTRADOR') {                    
              location.href = 'Principal/admin/inicio.php'                  
            } else if(resp == 'DIRECTOR POPULAR' || resp == 'DIRECTOR PARTICULAR' || resp == 'DIRECTOR EXTERNO'){                                        
                location.href = 'Principal/directores/inicio.php'
            } else if(resp == 'DOCENTE POPULAR' || resp == 'DOCENTE PARTICULAR' || resp == 'DOCENTE EXTERNO'){                                         
                location.href = 'Principal/docentes/inicio.php'
            }else{
                $('.campovacio').addClass('d-none')
                $('.datoincorrecto').removeClass('d-none')
            }
        }
    });
}