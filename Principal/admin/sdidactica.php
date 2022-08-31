<?php require('hadmin.php') ?>
<title>Secuencia Didáctica</title>
</head>
<body onload="user(), datos3()">
  <div class="derecha">
    <div class="col-8 text-center responsive mt-3 mb-1">
      <input type="text" class="form-control" placeholder="Nombre del archivo" id="npdf">
    </div>
    <div class="col-8 text-center mt-3 mb-1">
    <input class="form-control" type="file" name="apdf" id="pdf" accept=".pdf">
    </div>
    <div class="col-12 text-center mt-3 mb-1">
      <button type="button" class="btn btn-primary" onclick="subirpdf()">Subir Archivo</button>
    </div>    
    <div class="col-12 text-center mt-3 mb-1">
    <table class="table table-striped table-responsive table-hover">            
      <thead class= "table-dark">
      <th>ID Archivo</th>
      <th>Cedula Profesional</th>  
      <th>Nombre del usuario</th>        
        <th>Nombre de Archivo</th>
        <th>Fecha de subida</th>
        <th>Opciones</th>
      </thead> 
      <tbody id="result">    
      </tbody>
    </table>
    </div>
  </div>
</body> 
</html>