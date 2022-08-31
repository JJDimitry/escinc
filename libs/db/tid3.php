<?php     
$consulta=$_POST['consulta'];

require 'conn.php';
mysqli_set_charset($conexion,"utf8");

$consulta = "SELECT secd.ID, usuario.Gacad, usuario.Nombre, usuario.Ncedprof, 
secd.npdf, secd.fecha, secd.pdf FROM secd, usuario WHERE usuario.ID = secd.idusuario";
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