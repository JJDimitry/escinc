function login(){
    var user= $('#user').val();
    var user= user.toUpperCase();
    var passwd= $('#passwd').val();
    if(user != "" && passwd != ""){
        $.ajax({        
            data: {user:user, passwd:passwd},
            url: "libs/db/login.php",                    
            dataType: "JSON",        
            type: "POST"
            }).done(function(resp){
                if(resp != "NHR"){  
                    alert(resp);                                 
                    location.href = 'Principal/inicio.php';                                         
                }
                else
                alert("No Hay Registro");
            });
    }
    else{
        alert("todo mal");
    }
} 