<?php 
session_start();
error_reporting(0);
$varsesion=$_SESSION['Nombre'];
$tipoUsuario = $_SESSION['TipoUsuario'];

echo($varsesion);
if($varsesion == null || $varsesion == ''){
	header("location:../");
    session_destroy();
}

require('admin/hadmin.php')
?>
<title>Inicio</title>
</head>
<body>
</body>

</html>