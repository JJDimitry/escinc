<?php require('hdocentes.php') ?>
<title>Secuencia Didáctica</title>
</head>
<body onload="user();">
  <div class="derecha">
    <div class="col-12 text-center mt-3 mb-3">
      <input type="text" class="form-control" placeholder="Nombre del archivo" id="npdf">
    </div>
    <input class="form-control" type="file" name="apdf" id="pdf" accept=".pdf">
    <div class="col-12 text-center mt-3 mb-1">
      <button type="button" class="btn btn-primary" onclick="subirpdf()">Subir Archivo</button>
    </div>
  </div>
</body>
</html>