<?php
session_start();
error_reporting(0);
$nombre=$_SESSION['Nombre'];
$tipoUsuario = $_SESSION['TipoUsuario'];
$img=$_SESSION['img'];     

if($nombre == null || $nombre == ''){
	header("location:../../");
    session_destroy();  
}
?>

<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../libs/img/einco.png">
    <link rel="stylesheet" href="../libs/css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="../libs/css/estilos.css">
    <script src="../libs/js/jquery-3.5.1.min.js"></script>
    <script src="../libs/js/bootstrap.min.js"></script>
    <script src="../libs/js/croppr.min.js"></script>  
    <link rel="stylesheet" href="../libs/css/croppr.min.css">       <!--complemento del de arriba-->
    <script src="../libs/js/config.js"></script>
    
    <title>Perfil</title>

    <input type="hidden" id="nombre" value="<?php echo $nombre;?>"></input>
    <input type="hidden" id="imagen" value="<?php echo $img;?>"></input>
  </head>

  <body onload="cargarimg()">
  <div class= "container">
    <div class="left">
    <div class="col-12 text-center mt-3 mb-2">            
      <img id="perfil" class='img-fluid rounded-circle'>
    </div>
    <div class="col-12 text-center">
      <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
      Cambiar Imagen
      </button>
    </div>
  
    <div class="col-12 text-center mt-4">
                    <h5>Nombre de usuario:</h5>
                </div>
                <div class="col-12 text-center">
                	<input type="text" class="form-control" placeholder="Nombre de Usuario" id="usuario">
            	</div>
            	<div class="col-12 text-center mt-3">
                	<h5>Cambiar contraseña:</h5>
            	</div>
            	<div class="col-12 text-center">
                	<input type="password" class="form-control" placeholder="Contraseña" id="contrasena">
            	</div>
              <div class="col-12 text-center mt-3">
                	<h5>Vuelva a escribir la contraseña:</h5>
            	</div>
            	<div class="col-12 text-center">
                	<input type="password" class="form-control" placeholder="Contraseña" id="contrasena">
            	</div>
              <div class="col-12 text-center mt-3">
                	<h5>Contraseña anterior:</h5>
            	</div>
            	<div class="col-12 text-center">
                	<input type="password" class="form-control" placeholder="Contraseña" id="contrasena">
            	</div>
            	<div class="col-12 text-center mt-3 mb-1">
                	<button type="button" class="btn btn-primary" onclick="">Guardar Cambios</button>
            	</div>
  </div>
  <div class="right">
  <div class="col-12 text-center mt-4">
                    <h5>Nombre's:</h5>
                </div>
                <div class="col-12 text-center">
                	<input type="text" class="form-control" placeholder="Nombre's" id="usuario">
            	</div>
              <div class="col-12 text-center mt-4">
                    <h5>Apellido's:</h5>
                </div>
                <div class="col-12 text-center">
                	<input type="text" class="form-control" placeholder="Apellido's" id="usuario">
            	</div>
              <div class="col-12 text-center mt-4">
                    <h5>Fecha de Nacimiento:</h5>
                </div>
                <div class="col-12 text-center">
                	<input type="text" class="form-control" placeholder="DD/MM/AAAA" id="usuario">
            	</div>
              <div class="col-12 text-center mt-4">
                    <h5>Dirección:</h5>
                </div>
                <div class="col-12 text-center">
                	<input type="text" class="form-control" placeholder="Calle, Colonia, CP, Municipio" id="usuario">
            	</div>
              <div class="col-12 text-center mt-4">
                    <h5>Numero Telefónico:</h5>
                </div>
                <div class="col-12 text-center">
                	<input type="text" class="form-control" placeholder="A 10 Digitos" id="usuario">
            	</div>
              <div class="col-12 text-center mt-4">
                    <h5>Gmail:</h5>
                </div>
                <div class="col-12 text-center">
                	<input type="text" class="form-control" placeholder="Correo Electrónico" id="usuario">
            	</div>
              <div class="col-12 text-center mt-3 mb-1">
                	<button type="button" class="btn btn-primary" onclick="">Guardar Cambios</button>
            	</div>
  </div>
  </div>
  </body>



  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Seleccionar Imagen</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 col-md-6">
              <h5>Busque o arrastre la nueva imagen.</h5>
              <!-- Input file donde se adjunta la imagen -->
              <div class="row">
                <div class="col-12">
                  <input class="form-control" type="file" name="imagen" id="image" accept=".png,.jpg,.jpeg">
                </div>
                <div class="col-12 mt-2">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar ventana</button>
                  <button type="button" class="btn btn-primary" onclick="mostrarPrevioImangen()" data-dismiss="modal">confirmar</button>
                </div>
                <div class="col-12 mt-2"></div>
              </div>
            </div>
            <div class="col-12 col-md-6 text-center">
              <h5>Recorte su foto.</h5>
              <!-- Editor donde se recortará la imagen con la ayuda de croppr.js -->
              <div id="editor"></div>
            </div>
            <div class="col-12 col-md-6">
              <h5>Visualice el resultado</h5>
              <!-- Previa del recorte -->
              <canvas id="preview"></canvas>
            </div>
            <div class="col-12 d-none">
              <h2>4 Resultado en Base64</h2>
              <!-- Muestra de la imagen recortada en Base64 -->
              <code id="base64"></code>
            </div>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</html>