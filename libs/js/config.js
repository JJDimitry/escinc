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
            $('#fnac').val(cons[0].Fnac);
            $('#direccion').val(cons[0].Dir);
            $('#tel').val(cons[0].Tel);
            $('#gmail').val(cons[0].Email);
            $('#usuario').val(cons[0].NUsuario);
            $('#x').val(cons[0].Contrasena);            
        }
    });    
}

function aver(){
    var pswd0 = $('#x').val();
    var pswd3 = hex_md5($('#cont3').val());  
    var pswd2 = $('#cont2').val();  
    var pswd1 = $('#cont1').val();    
    if(pswd0 != pswd3){
        alert("la contraseña actual ingresada es incorrecta")
    }            
    else if(pswd1 != pswd2){
        alert("alguna de las nuevas contraseñas son diferentes")
    }
    else{
    var b64 = $('#base64').text();
    alert(b64);
    }
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