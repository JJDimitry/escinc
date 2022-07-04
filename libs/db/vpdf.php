<?php
$id=$_POST['id'];

require 'conn.php';
mysqli_set_charset($conexion,"utf8");
$consulta = "SELECT pdf FROM secd WHERE ID = $id";

mysqli_set_charset($conexion,"utf8");
$result=mysqli_query($conexion,$consulta);

if(mysqli_num_rows($result)>0){    
    if ($ver = mysqli_fetch_row($result)) 
        $resp = $ver[0];
    }              
else
    $resp=mysqli_error ($conexion);

mysqli_close($conexion);

echo $resp;
?>