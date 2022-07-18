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
        <th>Escuela</th>
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
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>