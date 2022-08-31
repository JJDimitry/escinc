<?php
$idusuario=$_POST['idusuario'];
$nombre=$_POST['nombre'];
$apellidos=$_POST['apellidos'];
$fnac=$_POST['fnac'];
$dir=$_POST['dir'];
$tel=$_POST['tel'];
$gmail=$_POST['gmail'];

require 'conn.php';
mysqli_set_charset($conexion,"utf8");

$consulta = "SELECT Email FROM usuario WHERE Email = '$gmail' AND ID != '$idusuario'";
$result = mysqli_query($conexion, $consulta);
if (mysqli_num_rows($result) == 0) {
    $consulta = "UPDATE usuario 
             SET Nombre='$nombre', Apellidos='$apellidos', Fnac='$fnac', Dir='$dir', Tel='$tel', Email='$gmail'
             WHERE ID = '$idusuario'";

    if($conexion->query($consulta)){
	    session_start();
        $_SESSION['Nombre']=$nombre;
        $resp ='Datos actualizados.';	
    }
    else{
	    $resp=mysqli_error ($conexion);
    }
}
else{
    $resp ='no';
}
mysqli_close($conexion);
echo $resp;
?>