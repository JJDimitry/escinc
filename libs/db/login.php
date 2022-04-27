<?php      

$NUsuario = $_POST['user'];
$passwd = $_POST['passwd'];
$img = "";
$TipTipoUsuario = "";

include('conn.php');

$sql = "SELECT NUsuario, img, TipoUsuario  FROM lusuario WHERE NUsuario = '$NUsuario' AND Contrasena = '$passwd' AND Estado = 1";
$result = $con->query($sql);      

if($result->num_rows >0){
    $vector= array();   
    while($row=$result->fetch_assoc()){
    $vector[]= $row;        
    }
    session_start();/*
    $_SESSION=['NUsuario'] = $vector2[0];
    $_SESSION=['img'] = $vector2[1];
    $_SESSION=['TipTipoUsuario'] = $vector2[2];*/
    //$vector= $vector['NUsuario'];
}
else{
    $vector= "NHR";
}

$json_string = json_encode($vector);
echo $json_string;    
?>