<?php      
require 'conn.php';
$idusuario=$_POST['idusuario'];
$nombre=$_POST['nombre'];
$sql="SELECT usuario.Nombre, usuario.Apellidos, usuario.Fnac, usuario.Dir, usuario.Tel, usuario.Email,
                lusuario.NUsuario, lusuario.Contrasena
            FROM usuario, lusuario 
            WHERE lusuario.idusuario = '$idusuario' AND usuario.ID = '$idusuario' AND lusuario.Estado = 1";
   mysqli_set_charset($conexion,"utf8");
   $result = $conexion->query($sql); 
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