function mostrar1(){        
    var eye1 = document.getElementById('Eye1');
    var cont1 = document.getElementById('cont1');
    if(cont1.type == "password"){
    cont1.type = "text";
    eye1.className = "icon ion-md-eye-off ico";
    }
    else{
        cont1.type = "password";
        eye1.className = "icon ion-md-eye ico";
    }
}
function mostrar2(){        
    var eye2 = document.getElementById('Eye2');
    var cont2 = document.getElementById('cont2');
    if(cont2.type == "password"){
    cont2.type = "text";
    eye2.className = "icon ion-md-eye-off ico";
    }
    else{
        cont2.type = "password";
        eye2.className = "icon ion-md-eye ico";
    }
}
function mostrar3(){        
    var eye3 = document.getElementById('Eye3');
    var cont3 = document.getElementById('cont3');
    if(cont3.type == "password"){
    cont3.type = "text";
    eye3.className = "icon ion-md-eye-off ico";
    }
    else{
        cont3.type = "password";
        eye3.className = "icon ion-md-eye ico";
    }
}


function cargarimg(){        
    var imagen = $("#imagen").val();    
    var image = new Image();
    image.src = imagen;                          
    perfil.setAttribute("src", imagen);
}

function datos(){
    cargarimg();
    var id = $('#ID').val();
    var nombre = $('#nombre').val();       
    fn='2018-03-08'
    var parametros = {
        "id": id,
        "nombre": nombre
    }; 
    $.ajax({
        method: 'POST',
        url: '../libs/db/datos.php',
        data: parametros,
        success: function(resp) {                             
            var cons = JSON.parse(resp);                                                                
            $('#name').val(cons[0].Nombre);
            $('#apellidos').val(cons[0].Apellidos);
            fn= cons[0].Fnac[6]; fn= fn + cons[0].Fnac[7]; fn= fn + cons[0].Fnac[8]; fn= fn + cons[0].Fnac[9];
            fn= fn + "-"; fn= fn + cons[0].Fnac[3]; fn= fn + cons[0].Fnac[4]; fn= fn + "-"; fn= fn + cons[0].Fnac[0]; fn= fn + cons[0].Fnac[1];
            $('#fnac').val(fn);          
            $('#direccion').val(cons[0].Dir);
            $('#tel').val(cons[0].Tel);
            $('#gmail').val(cons[0].Email);
            $('#usuario').val(cons[0].NUsuario);
            $('#x').val(cons[0].Contrasena);            
        }
    });    
}

function udl(){
    var id = $('#ID').val();
    var pswd0 = $('#x').val();
    var pswd3 = hex_md5($('#cont3').val());  
    var pswd2 = $('#cont2').val();  
    var pswd1 = $('#cont1').val();    
    var user = $('#usuario').val().toUpperCase();    
    alert(user);
    var img = $('#base64').text();
    var i = 0;
    if(pswd0 != pswd3){
        alert("Contraseña anterior incorrecta.")
    }            
    else if(pswd1 != pswd2){
        alert("Las contraseñas nuevas no coinciden.")
    }
    else if(user == ""){
        alert("El nombre de usuario no puede quedar vacio")
    }
    else if(img != ""){    
    i=1;
    }
    else{
        i=1;
    }
    if(pswd1 != ""){
        pswd1= hex_md5(pswd1);        
    }

    if(i==1){                
        var parametros = {
            "id": id,
            "user": user,
            "pswd": pswd1,
            "img": img
        };   
        $.ajax({
            method: 'POST',
            url: '../libs/db/adl.php',
            data: parametros,
            success: function(resp) {
                alert(resp);
            }
        });
    }
}

function udu(){    
    var id = $('#ID').val();
    var nombre = $('#name').val();
    var apellidos = $('#apellidos').val();
    var fnac = $('#fnac').val();
    var dir = $('#direccion').val().toUpperCase();
    var tel = $('#tel').val();
    var gmail = $('#gmail').val().toUpperCase();
        var anio= new Date(fnac).getFullYear();
        var mes = new Date(fnac).getMonth() + 1;
        var dia= new Date(fnac).getDate() + 1;
        if(mes < 10)
            mes = "0" + mes;
        if(dia < 10)
            dia = "0" + dia;
        fnac = dia + '/' + mes + '/' + anio;

    if( nombre.trim().length <= 0 || apellidos.trim().length <= 0 || dir.trim().length <= 0 || tel.trim().length <= 0 || gmail.trim().length <= 0) 
        alert("Favor de poner datos permitidos y no dejar campos vacios: " +  tel.trim().length);
    else if(fnac.trim().length != 10 || anio >= 2007 || anio <= 1940)
        alert("favor de poner una fecha de nacimiento valida. año:" + anio);
    else if(tel.length != 10)
        alert("Favor de poner un numero telefonico a 10 digitos o un numero valido.");
    else{
        var parametros = {
            "id": id,
            "nombre": nombre,
            "apellidos": apellidos,
            "fnac": fnac,
            "dir": dir,
            "tel": tel,
            "gmail": gmail
            }; 
        $.ajax({
            method: 'POST',
            url: '../libs/db/adu.php',
            data: parametros,
            success: function(resp) {
                alert(resp);
            }
        });
    }
}

function volver(){
    tu=$('#tu').val();
    if (tu == "ADMIN")
        location.href = '../Principal/admin/inicio.php';
    if (tu == 'DIRPOP' || tu == 'DIRPART' || tu == 'DIREXT')
        location.href = '../Principal/directores/inicio.php';
    if (tu == 'DOCPOP' || tu == 'DOCPART' || tu == 'DOCEXT')
        location.href = '../Principal/docentes/inicio.php';
}

$(document).ready(function() {
    $("#folio").keypress(function(e) { 
        var code = (e.keyCode ? e.keyCode : e.which); 
        if(code == 13){
           buscarFolio();
            return false;
        }
    });
  });

document.addEventListener('DOMContentLoaded', () => { 
    // Input File
    const inputImage = document.querySelector('#image');
    // Nodo donde estará el editor
    const editor = document.querySelector('#editor');
    // El canvas donde se mostrará la previa
    const miCanvas = document.querySelector('#preview');
    // Contexto del canvas
    const contexto = miCanvas.getContext('2d');
    // Ruta de la imagen seleccionada
    let urlImage = undefined;
    // Evento disparado cuando se adjunte una imagen
    inputImage.addEventListener('change', abrirEditor, false);
    /**
     * Método que abre el editor con la imagen seleccionada
     */
    function abrirEditor(e) {        
        $('#preview').show();
        // Obtiene la imagen
        urlImage = URL.createObjectURL(e.target.files[0]);
        // Borra editor en caso que existiera una imagen previa
        editor.innerHTML = '';
        let cropprImg = document.createElement('img');
        cropprImg.setAttribute('id', 'croppr');
        editor.appendChild(cropprImg);
        // Limpia la previa en caso que existiera algún elemento previo
        contexto.clearRect(0, 0, miCanvas.width, miCanvas.height);
        // Envia la imagen al editor para su recorte
        document.querySelector('#croppr').setAttribute('src', urlImage);
        // Crea el editor
        new Croppr('#croppr', {
            aspectRatio: 1,
            startSize: [70, 70],
            onCropEnd: recortarImagen
        })        
    }
    /**
     * Método que recorta la imagen con las coordenadas proporcionadas con croppr.js
     */
    function recortarImagen(data) {        
        // Variables
        const inicioX = data.x;
        const inicioY = data.y;
        const nuevoAncho = data.width;
        const nuevaAltura = data.height;
        const zoom = 1;
        let imagenEn64 = '';
        // La imprimo
        miCanvas.width = nuevoAncho;
        miCanvas.height = nuevaAltura;
        // La declaro
        let miNuevaImagenTemp = new Image();
        // Cuando la imagen se carge se procederá al recorte
        miNuevaImagenTemp.onload = function() {
            // Se recorta
            contexto.drawImage(miNuevaImagenTemp, inicioX, inicioY, nuevoAncho * zoom, nuevaAltura *
                zoom, 0, 0, nuevoAncho, nuevaAltura);
            // Se transforma a base64
            imagenEn64 = miCanvas.toDataURL("image/jpeg");
            // Mostramos el código generado
            document.querySelector('#base64').textContent = imagenEn64;
        }
        // Proporciona la imagen cruda, sin editarla por ahora
        miNuevaImagenTemp.src = urlImage;
    }
});

function mostrarPrevioImangen() {
    $('#perfil').removeClass('d-none');
    var imagen = $('#base64').text();                   
    var image = new Image();
    image.src = imagen;                          
    perfil.setAttribute("src", imagen);   
}