function login(){
    var user= $('#user').val();
    var passwd= $('#passwd').val();
    if(user != "" && passwd != ""){
        $.ajax({        
            data: {user:user, passwd:passwd},
            url: "libs/db/login.php",                    
            dataType: "JSON",        
            type: "POST"
            }).done(function(resp){
                if(resp != "NHR"){
                    //alert("Bienvenida, " + resp[0]['Contrasena'] + ", CON USUARIO: " + resp[0]['NUsuario']);
                    
                
                    $('#NUsuario').val(resp[0]['NUsuario']);
                    $('#Contrasena').val(resp[0]['Contrasena']);
                    $('#img').val(resp[0]['img']);
                    alert($('#NUsuario').val());
                    alert($('#Contrasena').val());
                    alert($('#img').val());
                    window.open("Principal/inicio.php", "_self");                                         
                }
                else
                alert("No Hay Registro");
            });
    }
    else{
        alert("todo mal");
    }
} 

function olvcont(){

}