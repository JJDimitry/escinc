<?php
//credenciales de inicio de sesion en la base de datos
$serv="localhost";
$usuario="root";
$contra="";
$bd="dbescinc";

//conexion a BD
$conexion=new mysqli($serv,$usuario,$contra,$bd);

//verifica si hubo error en la conexion
if ($conexion->connect_errno){
    //mensaje de error
    echo "Error: ".mysqli_connect_error();
    exit();
}
?>