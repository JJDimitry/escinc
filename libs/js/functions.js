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
                if (resp == 'ADMIN') {
                    alert('Tipo de Usuario: Administrador.');
                  location.href = 'Principal/admin/inicio.php';                  
                } else if(resp == 'DIRPOP' || resp == 'DIRPART' || resp == 'DIREXT'){                     
                    if(resp == 'DIRPOP')
                    alert('Tipo de Usuario: Director Popular.');
                    else if(resp == 'DIRPART')
                    alert('Tipo de Usuario: Director Particular.');
                    else
                    alert('Tipo de Usuario: Director Extensión.');
                    location.href = 'Principal/directores/inicio.php';
                } else if(resp == 'DOCPOP' || resp == 'DOCPART' || resp == 'DOCEXT'){                     
                    if(resp == 'DOCPOP')
                    alert('Tipo de Usuario: Docente Popular.');
                    else if(resp == 'DOCPART')
                    alert('Tipo de Usuario: Docente Particular.');
                    else
                    alert('Tipo de Usuario: Docente Extensión.');
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

function subirpdf(){       
    var pdf2 = document.getElementById("pdf").files; 
    if (pdf2.length > 0) {   
        var fileToLoad = pdf2[0];            
        var fileReader = new FileReader();
        var base64;            
        fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;                
            sdidact(base64);
            };            
        fileReader.readAsDataURL(fileToLoad);  
    }          
    else
    alert("favor de seleccionar un archivo para subir.");
}


function sdidact(base64){
    var dato = "";
    var mes = "";
    let fecha = new Date();
    dato = fecha.getDate();
    mes = fecha.getMonth() + 1;
    if (mes < 10)
        mes = "0" + mes;
    dato = dato + '/' + mes + '/';    
    dato = dato + fecha.getFullYear();
    var npdf = $("#npdf").val();
    var id = $("#ID").val(); 
    
    if(npdf == "")
        alert("favor de escribir un nombre al archivo a subir.");
    else
    var parametros = {
        "id": id,
        "dato": dato,
        "npdf": npdf,
        "base64": base64
    }; 
    $.ajax({
        method: 'POST',
        url: '../../libs/db/ssec.php',
        data: parametros,
        success: function(resp) {                             
        alert(resp);
        }
    });   
}