<?php require('hadmin.php') ?>
<title>Control de Usuarios</title>
</head>
<body onload="user(), datos2()">
<div class="derecha">    
    <div class="col-12 text-center mt-3 mb-1">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Crear nuevo usuario</button>
    </div>
    
    <table class="table table-striped table-responsive table-hover">            
      <thead class= "table-dark">
        <th>Cedula profesional</th>
        <th>Nombre</th>
        <th>Perfil Académico</th>
        <th>CURP</th>
        <th>Tipo de usuario</th>
        <th>Opciones</th>        
      </thead> 
      <tbody id="result">    
      </tbody>
    </table>
  </div>
  
</body>

</html>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="staticBackdropLabel">Nuevo Usuario</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <form class="row g-1">      
  <div class="col-md-4">    
    <label for="inputEmail4" class="form-label">Nombre's</label>
    <input type="email" class="form-control" id="n">
  </div>
  
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Apellido's</label>
    <input type="text" class="form-control" id="apellido">
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">Fecha de Nacimiento</label>
    <input type="date" class="form-control" id="fnac"> 
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">CURP</label>
    <input type="text" maxlength="18" class="form-control" id="curp" onkeyup="mayus(this)">
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">E-Mail</label>
    <input type="text" class="form-control" id="email">
  </div>
  <div class="col-md-4">
    <label for="inputAddress" class="form-label">Numero Telefónico</label>
    <input type="number" min="1" max="10" class="form-control" placeholder="A 10 Digitos" id="tel">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Calle</label>
    <input type="text" class="form-control" id="calle" onkeyup="mayus(this)">
  </div>
  <div class="col-md-3">
    <label for="inputState" class="form-label">Colonia</label>
    <input type="text" class="form-control" id="col" onkeyup="mayus(this)">
  </div>
  <div class="col-md-2">
    <label for="inputState" class="form-label">Codigo Postal</label>
    <input type="number" class="form-control" id="cp">
  </div>
  <div class="col-md-3">
    <label for="inputState" class="form-label">Municipio</label>
    <input type="text" class="form-control" id="mun" onkeyup="mayus(this)">
  </div>
  <h5>Datos Académicos</h5>
  <div class="col-md-2">
    <label for="inputState" class="form-label">Cédula Prof.</label>
    <input type="number" class="form-control" id="cedpro">
  </div>
  <div class="col-md-2">
    <label for="inputState" class="form-label">Grado Acad.</label>
    <input type="text" class="form-control" id="gacad" onkeyup="mayus(this)">
  </div>
  <div class="col-md-8">
    <label for="inputState" class="form-label">Perfil Académico</label>
    <input type="text" class="form-control" id="pacad" onkeyup="mayus(this)">
  </div>
  <h5>Inicio de Sesión</h5>
  <div class="col-md-3">
    <label for="inputState" class="form-label">Rol de Usuario</label>
    <select id="ruser" class="form-select">      
      <option value="0">---</option>
      <option value="DIRECTOR PARTICULAR">Director Particular</option>
      <option value="DIRECTOR POPULAR">Director Popular</option>
      <option value="DIRECTOR EXTERNO">Director Externo</option>
      <option value="DOCENTE PARTICULAR">Docente Particular</option>
      <option value="DOCENTE POPULAR">Docente Popular</option>
      <option value="DOCENTE EXTERNO">Docente Externo</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="inputState" class="form-label">Nombre de Usuario</label>
    <input type="text" class="form-control" id="nuser">
  </div>
  <div class="col-md-3">
  <label for="inputState" class="form-label">Contraseña</label>
  <div class="col-12 text-center contain">
    <input type="password" class="form-control passw" id="cont1">                    
      <i class="icon2 ion-md-eye ico" id="Eye1" onclick="mostrar('1')"></i>
  </div>            
  </div>
  <div class="col-md-3">
    <label for="inputState" class="form-label">Confirmar Contraseña</label>
    <div class="col-12 text-center contain">
    <input type="password" class="form-control passw" id="cont2">                    
      <i class="icon2 ion-md-eye ico" id="Eye2" onclick="mostrar('2')"></i>
  </div>        
  </div>
</form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="bnu()">Cancelar</button>
        <button type="button" class="btn btn-primary" onclick="gnu()">Crear</button>
      </div>
    </div>
  </div>
</div>