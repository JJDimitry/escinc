<?php
if(isset($_POST['CONTRASENA']) && !empty($_POST['CONTRASENA']) &&isset($_POST['USUARIO']) && !empty($_POST['USUARIO'])){
    require 'conn.php';
    $contrasena=$_POST['CONTRASENA'];
    $usuario=$_POST['USUARIO'];
    $tipoUsuario="";
    
    $consulta= "SELECT usuario.Nombre, lusuario.img, lusuario.TipoUsuario  FROM usuario, lusuario WHERE lusuario.NUsuario = '$usuario' AND lusuario.Contrasena = '$contrasena' AND lusuario.ID = usuario.ID";
    mysqli_set_charset($conexion,"utf8");
    $result=mysqli_query($conexion,$consulta);
    
    if(mysqli_num_rows($result)>0){
        while ($ver = mysqli_fetch_row($result)) {
            $tipoUsuario = $ver[0];
          }
          session_start();
          $_SESSION['Nombre']=$usuario;
          $_SESSION['TipoUsuario']=$tipoUsuario;          
    
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