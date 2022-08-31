function mostrar(a){            
    var eye = document.getElementById('Eye' + a);
    var cont = document.getElementById('cont'+ a);
    if(cont.type == "password"){
    cont.type = "text";
    eye.className = "icon2 ion-md-eye-off ico";
    }
    else{
        cont.type = "password";
        eye.className = "icon2 ion-md-eye ico";
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
    var idusuario = $('#idusuario').val();
    var nombre = $('#nombre').val();       
    fn=""
    var parametros = {
        "idusuario": idusuario,
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

function quitar(){
    $('.cai').addClass('d-none')
    $('.cnc').addClass('d-none')
    $('.nuv').addClass('d-none')
    $('.nur').addClass('d-none')
    $('.da').addClass('d-none')
    $('.gnv').addClass('d-none')
    $('.gnv2').addClass('d-none')
    $('.dp').addClass('d-none')
    $('.fn').addClass('d-none')
    $('.nt').addClass('d-none')
    $('.da2').addClass('d-none')
}

function udl(){
    var idusuario = $('#idusuario').val();
    var pswd0 = $('#x').val();
    var pswd3 = hex_md5($('#cont3').val());  
    var pswd2 = $('#cont2').val();  
    var pswd1 = $('#cont1').val();    
    var user = $('#usuario').val().toUpperCase();        
    var img = $('#base64').text();
    var i = 0;
    if(pswd0 != pswd3){
        $('.cai').removeClass('d-none')
        setTimeout(quitar, 4000)    
    }            
    else if(pswd1 != pswd2){
        $('.cnc').removeClass('d-none')
        setTimeout(quitar, 4000)    
    }
    else if(user == ""){
        $('.nuv').removeClass('d-none')
        setTimeout(quitar, 4000)    
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
            "idusuario": idusuario,
            "user": user,
            "pswd": pswd1,
            "img": img
        };   
        $.ajax({
            method: 'POST',
            url: '../libs/db/adl.php',
            data: parametros,
            success: function(resp) {                
                if(resp == "Datos actualizados."){
                $('#cont3').val(null);  
                $('#cont2').val(null);  
                $('#cont1').val(null);  
                $('.da').removeClass('d-none')
                    setTimeout(quitar, 4000)  
                }
                else{
                    $('.nur').removeClass('d-none')
                    setTimeout(quitar, 4000)  
                }
            }
        });
    }
}

function udu(){    
    let fecha = new Date();
    dato = fecha.getFullYear();
    var idusuario = $('#idusuario').val();
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
    var correo = verificar(gmail);    
    if(correo == 0){
        $('.gnv').removeClass('d-none')
        setTimeout(quitar, 4000)    
    }        
    else if( nombre.trim().length <= 0 || apellidos.trim().length <= 0 || dir.trim().length <= 0 || tel.trim().length <= 0 || gmail.trim().length <= 0) {        
        $('.dp').removeClass('d-none')
        setTimeout(quitar, 4000)    
    }        
    else if(fnac.trim().length != 10 || dato - anio <= 15 || dato - anio >= 75){
        $('.fn').removeClass('d-none')
        setTimeout(quitar, 4000)    
    }        
    else if(tel.length != 10){
        $('.nt').removeClass('d-none')
        setTimeout(quitar, 4000)    
    }        
    else{
        var parametros = {
            "idusuario": idusuario,
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
                if(resp == "Datos actualizados."){
                    $('.da2').removeClass('d-none')
                    setTimeout(quitar, 4000)  
                }
                else{
                    $('.gnv2').removeClass('d-none')
                    setTimeout(quitar, 4000)  
                }
            }
        });
    }
}

function verificar(gmail){    
    var c= gmail.indexOf('@');    
    if(c != -1)
    {
        c= gmail.trim().length - 1;
        if(gmail[c-2] == "." || gmail[c-3] == "."){            
            return 1
        }        
    }    
    return 0;
}

function volver(){
    tu=$('#tu').val();
    if (tu == "ADMINISTRADOR")
        location.href = '../Principal/admin/inicio.php';
    if (tu == 'DIRECTOR POPULAR' || tu == 'DIRECTOR PARTICULAR' || tu == 'DIRECTOR EXTERNO')
        location.href = '../Principal/directores/inicio.php';
    if (tu == 'DOCENTE POPULAR' || tu == 'DOCENTE PARTICULAR' || tu == 'DOCENTE EXTERNO')
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