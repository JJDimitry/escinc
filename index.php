<!DOCTYPE html>
<html lang="es">
	<link rel="icon" type="image/png" href="libs/img/einco.png">
	<link rel="stylesheet" href="libs/css/bootstrap/bootstrap.min.css">
	<script src="libs/js/functions.js"></script>
	<script src="libs/js/jquery.js"></script>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Login</title>
</head>
<body> 
	<a>Usuario/Correo:</a>
	<input id="user" type="text">
	<a>Contraseña:</a>
	<input id="passwd" type="password">
	<button type="button" class="btn btn-primary" onclick="login()">Iniciar Sesión</button>
	<a href="https://youtube.com" >Olvide la contraseña</a>	
	<input id="NUsuario" type="hidden">
	<input id="Contrasena" type="hidden">
	<input id="img" type="hidden">

<button type="button" onclick="location.href='https://www.facebook.com'" class="btn btn-link">Olvide la contraseña 2</button>
<?php require('libs/php/variables.php')?>
</body>

</html>