<?php      

$user = $_POST['user'];
$passwd = $_POST['passwd'];
$img = "";
$TipTipoUsuario = "";

include('conn.php');
$sql = "SELECT usuario.Nombre, lusuario.img, lusuario.TipoUsuario FROM usuario, lusuario WHERE lusuario.NUsuario = '$user' AND lusuario.Contrasena = '$passwd' AND lusuario.ID = usuario.ID";
mysqli_set_charset($conexion,"utf8");
$result=mysqli_query($conexion, $consulta);      

if(mysqli_num_rows($result)>0){
    while ($ver = mysqli_fetch_row($result)) {
        $tipoUsuario = $ver[2];
      }

      session_start();
          //$_SESSION['Nombre']=$usuario;
          //$_SESSION['TipoUsuario']=$tipoUsuario;  
    
        }
        else{
            $tipoUsuario ="NHR";
        }

/*
if($result->num_rows >0){
    $vector = array();   
    while($row = $result->fetch_assoc()){
    $vector[] = $row;        
    }
    
    session_start();
    $_SESSION['NUsuario'] = $vector[0]['Nombre'];
    $_SESSION['img'] = $vector[0]['img'];
    $_SESSION['TipTipoUsuario'] = [0]['TipoUsuario'];    
}
else{
    $vector= "NHR";
}


$json_string = json_encode($vector);
echo $json_string;    
*/
?>