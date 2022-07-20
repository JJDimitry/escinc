<?php
    require 'conn.php';
    
    $c1=$_POST['c1'];
    $c2=$_POST['c2'];
    $c3=$_POST['c3'];
    $c4=$_POST['c4'];
    $c5=$_POST['c5'];
    $insert1=$_POST['insert1'];
    $insert2=$_POST['insert2'];
    $insert22=$_POST['insert22'];    

    mysqli_set_charset($conexion,"utf8");
    $result=mysqli_query($conexion, $c1);
    if(mysqli_num_rows($result)>0){        
        if ($ver = mysqli_fetch_row($result))
            $resp = '1';
        else
            $resp = "paso 1 bien";
    }
    else{
            $resp=mysqli_error ($conexion);
            
            $result=mysqli_query($conexion, $c2);
            if(mysqli_num_rows($result)>0)   
                $resp = 2;
            else{
                $result=mysqli_query($conexion, $c3);
                if(mysqli_num_rows($result)>0)   
                    $resp = 3;
                else{
                    $result=mysqli_query($conexion, $c4);
                    if(mysqli_num_rows($result)>0)   
                        $resp = 4;
                    else{
                        if($conexion->query($insert1)){
                            $result=mysqli_query($conexion, $c5);
                            if(mysqli_num_rows($result)>0){
                                if ($ver = mysqli_fetch_row($result)) {
                                    $ID = $ver[0];
                                    $insert2= $insert2 . $ID . $insert22;
                                    if($conexion->query($insert2)){
                                        $resp ='Nuevo usuario agregado.';	
                                    }
                                    else{
                                        $resp=mysqli_error ($conexion);
                                    }
                                }                                                           
                                else
                                    $resp=mysqli_error ($conexion);                            
                            }
                            else
                                $resp=mysqli_error($conexion);                        
                        }
                    }
                }
            }
        
    }

    mysqli_close($conexion);

echo $resp;
?>