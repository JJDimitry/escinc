<?php
$idusuario=$_POST['idusuario'];
$user=$_POST['user'];
$pswd=$_POST['pswd'];
$img=$_POST['img'];
$ip=$img;

if($pswd != "" || $img != "")
    $user= "NUsuario = '" . $user . "',";     
else
    $user= "NUsuario = '" . $user . "'";     
if($img != "")
    $img= "img = '" . $img . "'";     
if($pswd != "")
    $pswd= "contrasena = '" . $pswd . "'"; 
if($pswd != "" && $img != "")    
    $pswd = $pswd . ",";

require 'conn.php';
mysqli_set_charset($conexion,"utf8");
$consulta = "UPDATE lusuario SET $user $pswd $img
             WHERE idusuario = '$idusuario'";

if($conexion->query($consulta)){
	session_start();
    if($img != "")
        $_SESSION['img']=$ip;
    $resp ='Datos actualizados.';	
}
else{
	$resp=mysqli_error ($conexion);
}
mysqli_close($conexion);
echo $resp;
?>