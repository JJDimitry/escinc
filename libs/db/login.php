<?php
    require 'conn.php';
    $contrasena=$_POST['CONTRASENA'];
    $usuario=$_POST['USUARIO'];
    $img="";
    $id="";
    $consulta= 
        "SELECT usuario.ID, usuario.Nombre, lusuario.img, lusuario.TipoUsuario 
         FROM usuario, lusuario WHERE lusuario.NUsuario = '$usuario' 
         AND lusuario.Contrasena = '$contrasena' AND lusuario.ID = usuario.ID AND lusuario.Estado = 1";
    mysqli_set_charset($conexion,"utf8");
    $result=mysqli_query($conexion,$consulta);
    
    if(mysqli_num_rows($result)>0){
        
        if ($ver = mysqli_fetch_row($result)) {
            $id = $ver[0]; 
            $usuario = $ver[1];
            $img = $ver[2];
            $tipoUsuario = $ver[3];
          }                   
          session_start();
          $_SESSION['ID'] = $id;
          $_SESSION['Nombre'] = $usuario;
          $_SESSION['TipoUsuario'] = $tipoUsuario;
          $_SESSION['img'] = $img;          
    
          $resp= $tipoUsuario;          
    }
    else{
        $resp=mysqli_error ($conexion);
    }
    mysqli_close($conexion);

echo $resp;
?>