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
    if(dato<10)
    dato="0" + dato;    
    mes = fecha.getMonth() + 1;
    if (mes < 10)
        mes = "0" + mes;
    dato = dato + '/' + mes + '/';    
    dato = dato + fecha.getFullYear();
    var npdf = $("#npdf").val();
    var id = $("#ID").val();     
    if(base64.length > 1048576)
        alert("El pdf debe pesar 1 Mb o menos.");
    else if(npdf == "")
        alert("favor de escribir un nombre al archivo a subir.");
    else{
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
                if(resp == "PDF Subido."){                                        
                    window.location.reload();
                }
            }
        });  
    } 
}


function datos(){    
    var id = $('#ID').val();    
    $.ajax({        
        method: 'POST',
        url: '../../libs/db/tsd.php',                       
        data: {"id":id},
        success: function(resp) { 
            if(resp != "vacio"){
                var cons = JSON.parse(resp);        
                for(var i=0; i <cons.length; i++)
                {
                    var n= "<tr>" +
                       "<td tittle>" + cons[i].ID + "</td>" +
                       "<td>" + cons[i].npdf + "</td>" +
                       "<td>" + cons[i].fecha + "</td>" +
                       "<td><i title='Visualizar' class='icon ion-md-today selec' id=" + cons[i].ID + " onclick='ver(this.id)'></i>" + 
                       "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i title='Borrar' class='icon ion-md-trash selec' id=" + cons[i].ID + " onclick='del(this.id)'></i></td></tr>"; 
                       $(n).appendTo("#result");
                }                
            }
        }
    });
}


function ver(id){
    $.ajax({
        method: 'POST',
        url: '../../libs/db/vpdf.php',
        data: {"id":id},
        success: function(resp) {
            let pdfWindow = window.open();
            pdfWindow.document.write( "<iframe width='100%' height='100%' src='" + resp +"'></iframe>" )
        }
    });
}

function del(id){
    $.ajax({
        method: 'POST',
        url: '../../libs/db/dpdf.php',
        data: {"id":id},
        success: function(resp) {
            if(resp == 'Archivo borrado')
            {
                alert(resp);
                window.location.reload();
            }
            else
                alert(resp);
        }
    });
}