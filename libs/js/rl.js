
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

function buscarFolio(){ 
    var folio = $('#folio').val();
    var estado = $('#estado').val();
    if(folio.length > 0 && estado.length > 0){
        var parametros = {
            "folio": folio,
            "estado": estado
        };    
        $.ajax({
            method: 'POST',
            url: 'php/buscarLicencia.php',
            data: parametros,
            success: function(resp){  
            if(resp!="vacio")
                {     
                    //location.href="resultado.html";           
                    var js = JSON.parse(resp);            
                    $('.campovacio').addClass('d-none');  
                    $('.datoincorrecto').addClass('d-none');
                    $('#registrocompleto').modal('show');
                    $('#rEstado').text(js[0].estado);
                    $('#tipoLicencia').text(js[0].tipoLicencia);
                    $('#rFolio').text(js[0].folio);
                    $('#nombre').text(js[0].nombre);
                    $('#curp').text(js[0].curp);
                    $('#fExpedicion').text(js[0].fExpedicion);
                    $('#fVencimiento').text(js[0].fVencimiento);
                    //window.open('http://localhost/verificacionlicencias/resultado.html','_blank')
                    //location.href="resultado.html";
                    var image = new Image();
                    image.src = js[0].foto;                          
                    imagen.setAttribute("src", js[0].foto); 
                }    
                else
                {     
                    $('.campovacio').addClass('d-none');                      
                    $('.datoincorrecto').removeClass('d-none');
                }
        }});
    }else{
        $('.datoincorrecto').addClass('d-none');
        $('.campovacio').removeClass('d-none');
    }
}




function mayus(e) {
    e.value = e.value.toUpperCase();
}
function guardarLicencia() {
    var fechaVencimiento='';
    var folio = $("#folio").val();
    var nombre = $('#nombre').val();
    var gestor = $('#gestor').val();
    var curp = $('#curp').val();
    var tipoLicencia = $("#tipoLicencia").val();
    var fechaExpedicion = $('#fechaExpedicion').val();
    var estado = $('#estado').val();
    var image = $('#imagen').val();
    var imagenBase64 = $('#base64').text(); 
    var vigencia = $("#vigencia").val();
    if (gestor == "" || folio == "" || nombre == "" || curp =="" || curp.length< 10 || tipoLicencia=="0" || fechaExpedicion=="" || vigencia=="0" || estado =="0" || image =="" || imagenBase64 ==''){
        $('.campovacio').removeClass('d-none');
        $('.fechaIncorrecta').addClass('d-none');
        $('.folioRegistrado').addClass('d-none');
   }else{
    reg=/^(?:(?:(0?[1-9]|1\d|2[0-8])[/](0?[1-9]|1[0-2])|(29|30)[/](0?[13-9]|1[0-2])|(31)[/](0?[13578]|1[02]))[/](0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|(29)[/](0?2)[/](\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/; 
    if (reg.test($('#fechaExpedicion').val() )) { 
        var res = fechaExpedicion.split("/");
        var d=res[0];
        var m=res[1];
        var d1=res[0];
        var m2=res[1];
        var a=res[2];
        var diagonal='/';
        a= parseInt(a);
        if(m=='02'&&d=='29'){
            d='01';
            m='03'
        }
        switch(vigencia) {
            case '1':
                a= a+1;
              break;
              case '2':
                a= a+3;
                break;
                case '3':
                    a= a+4;                      
              break;
              case '4':
                a= a+5; 
              break;
              case '5':
                a= a+6; 
              break;
              case '6':
                fechaVencimiento ="PERMANENTE";
              break;
        }
          if(fechaVencimiento !='PERMANENTE'){
            fechaVencimiento= d+diagonal+m+diagonal+a;
          }
          if(vigencia=='3'&&d1=='29'&&m2=='02'){
            fechaVencimiento= d1+diagonal+m2+diagonal+a;  
          }
        var parametros = {
            "folio": folio,
            "nombre": nombre,
            "gestor": gestor,
            "curp": curp,
            "tipoLicencia": tipoLicencia,
            "fechaExpedicion": fechaExpedicion,
            "fechaVencimiento": fechaVencimiento,
            "estado": estado,
            "b64": imagenBase64
        };
        //si fecha de expedicion es igual 29/02/2020 u otro año entonces
        // sera igual a 01/03/200...
        // pero si es para licencia de 4 años sera la misma fecha
        $.ajax({
            method: 'POST',
            url: 'php/registrarLicencia.php',
            data: parametros,
            success: function(resp) {
                if (resp == 'registrado') {
                    $('.campovacio').addClass('d-none');
                    $('input[type="text"]').val('');
                    $('#tipoLicencia').val('0');
                    $('#fechaExpedicion').val('');
                    $('#vigencia').val('0');
                    $('#estado').val('0');
                    $('#image').val('');
                    $('#muest').addClass('d-none');
                    $("#editor").empty();
                    $('#preview').hide();
                    alertify.success('Registrado');
                    $('.folioRegistrado').addClass('d-none');
                    $('.fechaIncorrecta').addClass('d-none');
                    $('.campovacio').addClass('d-none');
                } else if(resp == 'El folio ya esta registrado'){

                    $('.folioRegistrado').removeClass('d-none');
                    $('.fechaIncorrecta').addClass('d-none');
                    $('.campovacio').addClass('d-none');
        
                }
                else{

                }
            }
        });
    
    } 
    else { 
        $('.fechaIncorrecta').removeClass('d-none');
        $('.campovacio').addClass('d-none');
        $('.folioRegistrado').addClass('d-none');
    }      
   }
}
function mostrarPrevioImangen() {
    $('#muest').removeClass('d-none');
    var imagenBase64 = $('#base64').text();                   
    var image = new Image();
    image.src = imagenBase64;                          
    muest.setAttribute("src", imagenBase64);   
}
function TiempoActividad()
{
    setTimeout("DestruirSesion()", 60000*480);
}
function DestruirSesion()
{
    location.href = "php/cerrarSesion.php";
}

function limpiarCampos(){  
    $('#folio').val('');
}
function agregarform(datos) {
    d = datos.split('||');
    $('#tipoUsuario').val(d[0]);
    $('#nombre').val(d[1]);
    $('#usuario').val(d[2]);
    
    $('#idUsuario').val(d[4]);
}
function actualizarusuario() {
    tipoUsuario = $('#tipoUsuario').val();
     nombre = $('#nombre').val();
     usuario = $('#usuario').val();
     contrasena = $('#contrasena').val();
     if (contrasena!=''){
        contrasena = hex_md5(contrasena);
     }
    
    idUsuario = $('#idUsuario').val();
    cadena = {
        "tipoUsuario": tipoUsuario,
        "nombre": nombre,
        "usuario": usuario,
        "contrasena": contrasena,
        "idUsuario": idUsuario
    };
    $.ajax({
        type: "POST",
        url: "php/actualizarusuario.php",
        data: cadena,
        success: function(resp) {
            if (resp == 'actualizado') {
                alertify.success('Actualizado :)');
                $('#editarganadero').modal('hide');
                setTimeout(function() {
                    location.reload();
                }, 1000);

            } else {
                alert(resp);
            }
        }
    });
}

function eliminar(id) {
    alertify.confirm('Eliminar registro', '¿Esta seguro?',
        function() {
            eliminarusuario(id)
        },
        function() {
            alertify.error('Cancelado')
        });
}

function eliminarusuario(id) {

    idUsuario = id;

    parametros = {
        "idUsuario": idUsuario
    };

    $.ajax({
        type: "POST",
        url: "php/eliminarusuario.php",
        data: parametros,
        success: function(resp) {
            if (resp == 'eliminado') {
                alertify.success('Eliminado :)');
                setTimeout(function() {
                    location.reload();
                }, 1000);

            } else {
                alert(resp);
            }

        }
    });
}
function guardarUsuario() {




    var nombre = $("#name").val();
    var tipoUsuario = $('#usertype').val();
    var contrasena = $('#pass').val();
   
    var usuario = $('#user').val();

if(nombre ==''||tipoUsuario=='0' || contrasena==''||usuario==''){
    $('.usuarioRegistrado').addClass('d-none');
    $('.campovacio').removeClass('d-none');
  

}else{
    contrasena = hex_md5(contrasena);
    var parametros = {
        "tipoUsuario": tipoUsuario,
        "nombre": nombre,
        "contrasena": contrasena,
        "usuario": usuario
    };
    $.ajax({
        method: 'POST',
        url: 'php/registrarusuario.php',
        data: parametros,
        success: function(resp) {
            if (resp == 'registrado') {
                alertify.success('registrado :)');
                setTimeout(function() {
                    location.reload();
                }, 1000);

            } else if ('El usuario ya esta registrado'){
               
                $('.campovacio').addClass('d-none');
                $('.usuarioRegistrado').removeClass('d-none');
               
            }else{
                alert (resp);
            }
        }
    });

}


    
}
function guardarGestor() {
    var nombre = $("#name").val();   
    
if(nombre ==''){
    $('.gestorRegistrado').addClass('d-none');
    $('.campovacio').removeClass('d-none');
  

}else{
    
    var parametros = {
        "nombre": nombre,
    };
    $.ajax({
        method: 'POST',
        url: 'php/registrargestor.php',
        data: parametros,
        success: function(resp) {
            if (resp == 'registrado') {
                alertify.success('registrado :)');
                setTimeout(function() {
                    location.reload();
                }, 1000);

            } else if ('El gestor ya esta registrado'){
               
                $('.campovacio').addClass('d-none');
                $('.gestorRegistrado').removeClass('d-none');
               
            }else{
                alert (resp);
            }
        }
    });

}


    
}