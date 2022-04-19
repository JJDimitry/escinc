<?php      

$user= $_POST['user'];
$passwd= $_POST['passwd'];

include('conn.php');

$sql = "SELECT * FROM lusuario WHERE NUsuario = '$user' AND Contrasena = '$passwd'";
$result = $con->query($sql);      
include('cerrar.php');
if($result->num_rows >0){
    $vector= array();   
    while($row=$result->fetch_assoc()){
    $vector[]= $row;        
    }    
}
else{
    $vector= "NHR";
}

$json_string = json_encode($vector);
echo $json_string;    
?>