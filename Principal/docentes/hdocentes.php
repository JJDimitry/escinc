<?php
session_start();
error_reporting(0);
$idusuario=$_SESSION['idusuario'];
$nombre=$_SESSION['Nombre'];
$tipoUsuario = $_SESSION['TipoUsuario'];
$img=$_SESSION['img'];     

if($nombre == null || $nombre == ''){
	header("location:../../");
    session_destroy();  
}
else if($tipoUsuario == 'ADMINISTRADOR')
  header("location:../admin/inicio.php");
  else if($tipoUsuario == 'DIRECTOR POPULAR' || $tipoUsuario == 'DIRECTOR PARTICULAR' || $tipoUsuario == 'DIRECTOR EXTERNO')
  header("location:../directores/inicio.php");
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" href="../../libs/img/einco.png">
  <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../../libs/css/bootstrap/bootstrap.min.css">    
  <link rel="stylesheet" href="../../libs/css/menu.css">
  <link rel="stylesheet" href="../../libs/css/estilos.css">
  <script src="../../libs/js/jquery-3.5.1.min.js"></script>  
	<script src="../../libs/js/bootstrap/bootstrap.min.js"></script>
  <script src="../../libs/js/functions.js"></script>
  
  <input type="hidden" id="idusuario" value="<?php echo $idusuario;?>">
  <input type="hidden" id="nombre" value="<?php echo $nombre;?>">
  <input type="hidden" id="imagen" value="<?php echo $img;?>">
  
 
  <div class="d-flex">
    <div id="sidebar-container" class="bg-primary">
      <div class="logo">
        <img src="../../libs/img/eincr.png" alt="logo" width="150px">
        <h4 class="text-light font-weight-bold">SASEI-UAGro</h4>
      </div>
      
      <div class="menu">
        <a href="inicio.php" class="d-block text-light p-2"><i class="icon ion-md-home lead"></i>&nbsp;&nbsp; Inicio</a>
        <a href="sdidactica.php" class="d-block text-light p-2"><i class="icon ion-md-paper lead"></i>&nbsp;&nbsp; Secuencia Didáctica</a>                
        <a href="https://zoom.us/" class="d-block text-light p-2" target="_blank"><i class="icon ion-md-videocam lead"></i>&nbsp; Sala de Reuniones</a>        
      </div>
    </div>

    <div class="w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler ms-auto" type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNavDropdown" 
                  aria-controls="navbarNavDropdown" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown ms-auto">
                <p id="user" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></p>                                                                                 
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a href="../config.php" class="btn btn-link">Configuración</a></li>
                  <li><button type="button" class="btn btn-link" onclick="DestruirSesion()">Cerrar Sesion</button></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
