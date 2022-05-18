<?php
if(isset($_POST['CONTRASENA']) && !empty($_POST['CONTRASENA']) &&isset($_POST['USUARIO']) && !empty($_POST['USUARIO'])){
    require 'conn.php';
    $contrasena=$_POST['CONTRASENA'];
    $usuario=$_POST['USUARIO'];
    $img="";
    $consulta= 
        "SELECT usuario.Nombre, lusuario.img, lusuario.TipoUsuario 
         FROM usuario, lusuario WHERE lusuario.NUsuario = '$usuario' 
         AND lusuario.Contrasena = '$contrasena' AND lusuario.ID = usuario.ID";
    mysqli_set_charset($conexion,"utf8");
    $result=mysqli_query($conexion,$consulta);
    
    if(mysqli_num_rows($result)>0){
        
        while ($ver = mysqli_fetch_row($result)) {
            $usuario = $ver[0];
            $img = $ver[1];
            $tipoUsuario = $ver[2];
          }         
          session_start();
          $_SESSION['Nombre']=$usuario;
          $_SESSION['TipoUsuario']=$tipoUsuario;
          $_SESSION['img']=$img;          
    
        if($tipoUsuario == 1){
            $resp='Sesion administrador';
           
        }
        else {
            $resp='Sesion trabajador';
        }          
    
    }
    else{
        $resp=mysqli_error ($conexion);
    }
    mysqli_close($conexion);
}
else{
 $resp= 'Buen intento, los campos estan vacios';
}

echo $resp;
?>