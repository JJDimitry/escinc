<html lang="es">
	<head>

		
		<meta charset="UTF-8">
		<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">

		<meta name="keywords" content="Sistema de Administración de Prepas Populares, Guerrero" />
		<meta name="description" content="Sistema de Administración de Prepas Populares, Guerrero">
		<meta name="author" content="jacatalan">

		<!-- Mobile Metas -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			<title>Sistema de Administración de Prepas Populares, Guerrero</title>

		<!-- Web Fonts  -->
		<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css">

		<!-- Vendor CSS -->
		<link rel="stylesheet" href="principal/assets/vendor/bootstrap/css/bootstrap.css" />
		<link rel="stylesheet" href="principal/assets/vendor/font-awesome/css/font-awesome.css" />
		<link rel="stylesheet" href="principal/assets/vendor/magnific-popup/magnific-popup.css" />
		<link rel="stylesheet" href="principal/assets/vendor/bootstrap-datepicker/css/datepicker3.css" />

		<!-- Theme CSS -->
		<link rel="stylesheet" href="principal/assets/stylesheets/theme.css" />

		<!-- Skin CSS -->
		<link rel="stylesheet" href="principal/assets/stylesheets/skins/default.css" />

		<!-- Theme Custom CSS -->
		<link rel="stylesheet" href="principal/assets/stylesheets/theme-custom.css">
		
		<style type="text/css">
  	
		html, body {
    background: #ecedf008;
    /* width: 100%; */
}
  </style>
	
		

		<!-- Head Libs -->
		<script src="principal/assets/vendor/modernizr/modernizr.js"></script>

	</head>
	<body>
		<!-- start: page -->
		
		<?php
		
	include "liga.php";	
			  

				 
				
		
		?>
		
		<section class="body-sign">
			<div class="center-sign">
				<div class="row">
                 <div class="col-sm-12">
                            <h1 style="text-align: center;color:#ffffff"><strong>Sistema de Administación  de Supervisiones a Escuelas Incorpodadas de la UAGro. <small>(SASEI-UAGro)</small></strong></h1>
                            <div class="description">
                            	<!--<p>
	                            	This is a free responsive login form made with Bootstrap. 
	                            	Download it on <a href="http://azmind.com"><strong>AZMIND</strong></a>, customize and use it as you like!
                            	</p>-->
                            </div>
                        </div>
                   </div> 
				<a href="index.php" class="logo pull-left">
					<img src="principal/assets/images/uagroh.png" height="64" alt="Porto Admin" />
				</a>

				<div class="panel panel-sign">
					<div class="panel-title-sign mt-xl text-right">
						<h2 class="title text-uppercase text-bold m-none"><i class="fa fa-user mr-xs"></i> Iniciar Sesión </h2>
					</div>
					<div class="panel-body">
					
					<div class="error alert-danger">
                                        <strong>¡Error! </strong><span>Datos de Ingreso no validos, Verifique.</span>
                                       </div>
						<form action="" method="post" name="frmdatos" id="frmdatos">
							<div class="form-group mb-lg">
								<label>Nombre de usuario nuevo </label>
								<div class="input-group input-group-icon">
									<input name="username" id="username" type="text" class="form-control input-lg" />
									<span class="input-group-addon">
										<span class="icon icon-lg">
											<i class="fa fa-user"></i>
										</span>
									</span>
								</div>
							</div>

							<div class="form-group mb-lg">
								
								<div class="input-group input-group-icon">
									<input name="password" id="password" type="password" class="form-control input-lg" />
									<span class="input-group-addon">
										<span class="icon icon-lg">
											<i class="fa fa-lock"></i>
										</span>
									</span>
								</div>
							</div>

							<div class="row">
								
								<div class="col-sm-4 text-right">
									<button type="submit" class="btn btn-primary hidden-xs">Iniciar Sesión</button>
									<button type="submit" class="btn btn-primary btn-block btn-lg visible-xs mt-lg">Iniciar Sesión</button>
								</div>
							</div>


						</form>
					</div>
				</div>

				
			</div>
		</section>
		<!-- end: page -->

		<!-- Vendor -->
		<script src="principal/assets/vendor/jquery/jquery.js"></script>
		<script src="principal/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
		<script src="principal/assets/vendor/bootstrap/js/bootstrap.js"></script>
		<script src="principal/assets/vendor/nanoscroller/nanoscroller.js"></script>
		<script src="principal/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
		<script src="principal/assets/vendor/magnific-popup/magnific-popup.js"></script>
		<script src="principal/assets/vendor/jquery-placeholder/jquery.placeholder.js"></script>
		  <script src="principal/assets/js/jquery.backstretch.min.js"></script>
		
		<script src="principal/assets/vendor/jquery-validation/jquery.validate.js"></script>
		
		<!-- Theme Base, Components and Settings -->
		<script src="principal/assets/javascripts/theme.js"></script>
		
		<!-- Theme Custom -->
		<script src="principal/assets/javascripts/theme.custom.js"></script>
		
		<!-- Theme Initialization Files -->
		<script src="principal/assets/javascripts/theme.init.js"></script>
		  <script type="text/javascript">
		
			
	

		$( document ).ready( function () {
				$(".error").hide();
			
			// $.backstretch("principal/assets/img/backgrounds/1.jpg");
			 $.backstretch("assets/img/backgrounds/1.jpg");
			
			
			
		
			
			
			$( "#frmdatos" ).validate( {
				rules: {
					username: "required",
					password: {
						required: true,
						minlength: 6
					}
					
				},
				messages: {
					username: "Por favor escriba su nombre de usuario",
					password: {
						required: "Pro favor escriba su contraseña",
						minlength: "La contraseña debe ser de 8 caracteres mínimo"
					}
				},
				errorElement: "em",
				errorPlacement: function ( error, element ) {
					
					error.addClass( "help-block" );

					if ( element.prop( "type" ) === "checkbox" ) {
						error.insertAfter( element.parent( "label" ) );
					} else {
						error.insertAfter( element ); 
					}
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".col-sm-4" ).addClass( "has-error" ).removeClass( "has-success" );
					$( element ).parents( ".col-sm-6" ).addClass( "has-error" ).removeClass( "has-success" );
					$( element ).parents( ".mb-lg" ).addClass( "has-error" ).removeClass( "has-success" );
				},
				unhighlight: function (element, errorClass, validClass) {
					$( element ).parents( ".col-sm-4" ).addClass( "has-success" ).removeClass( "has-error" );
					$( element ).parents( ".col-sm-6" ).addClass( "has-success" ).removeClass( "has-error" );
					$( element ).parents( ".mb-lg" ).addClass( "has-success" ).removeClass( "has-error" );
				},
				
		
				
				submitHandler: function (form) {
				
				 var dataString = '&username='+$('#username').val()+
			        '&password='+$('#password').val()
										  ;
			           var url = 'principal/login.php';
	
			        // var 
						
						$.ajax({
			                type: "POST",
			               url:url, 
							dataType:'json',
			                data: dataString,
							beforeSend: function(){
								$('.btn').val('Validando..');
								//$(".btn").attr("value","Validando..");
							}
						})
						.done(function(respuesta){
							console.log(respuesta);
							
							if(!respuesta.error){
								
								
									if(respuesta.tipo == 'AdminS-01'){
										location.href= 'principal/Admin/';
										
									}else {
								
								
									if(respuesta.tipo == "Jfarea-02"){
										location.href= 'principal/jefdepto/';
										
									}
                                        if(respuesta.tipo == "AdmCos-03"){
									location.href= 'principal/Admin/indexc.php';
										
									}
									
									virtual2020
									
								
								}
							}else{
									 $('.error').slideDown('slow');
										setTimeout(function(){
											  $('.error').slideUp('slow');
										 },3000);
										 $('.btn').val('Iniciar Sesión');
											//$("#ingresar").attr("value","ddd..");
										 $("#username").val("");
								$("#password").val("");
										  $("#username").focus();
							}
							
							
								
								
						})
						.fail(function(resp){
								console.log("error");
						})
			                
						.always(function(){
								console.log("Complete");
						});
			                
			                
			          
			            				 
				
			
				
				
			}
				
			
				
			} );
			

			
		} );
	</script>
		
	</body>
</html>