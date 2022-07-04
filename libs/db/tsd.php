<?php      
$id=$_POST['id'];

require 'conn.php';
mysqli_set_charset($conexion,"utf8");

$consulta = "SELECT * FROM secd WHERE idusuario = '$id'";

$result = $conexion->query($consulta); 
   if($result->num_rows >0){
       $vector= array();  
       while($row=$result->fetch_assoc()){ 
       $vector[]= $row;            
       }  
       $json_string = json_encode($vector);     
   }
   else{
       $json_string = "vacio";    
   }
   echo $json_string;
?>