function validateForm(){
	/* Escribe tú código aquí */

  function validarNombre(){
  	var nombre		= document.getElementById("name").value;
  	if(nombre.length == 0){
		alert("Error en nombre: no puede quedar vacío!");
  	}else if(/[0-9]/.test(nombre)){
		alert("Error en nombre: no puede contener números!");
  	}else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
        alert("Error en Nombre: La primera letra debe ser mayúscula");
    }
  }
  validarNombre();

  function validarApellido(){
  	var apellido	= document.getElementById("lastname").value;
  	if(apellido.length == 0){
		alert("Error en apellido: no puede quedar vacío!")
  	}else if(/[0-9]/.test(apellido)){
		alert("Error en apellido: no puede contener números!");
  	}else if(apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
        alert("Error en Apellido: La primera letra debe ser mayúscula");
    }
  }
  validarApellido();

  function validarEmail(){
  	var email		= document.getElementById("input-email").value;
  	if(email.length == 0){
		alert("Error en correo: no puede quedar vacío!\n");
  	}else if(!/([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/.test(email)){
		alert("Error en correo: no tiene el formato test@test.com!");
  	}
  }
  validarEmail();

  function validarPassword(){
  	var password	= document.getElementById("input-password").value;
  	if(password.length == 0){
		alert("Error en contraseña: no puede quedar vacío!");
  	}else if(password === "123456" || password === "password"){
		alert("La contraseña no debe ser: password ni 123456");
	}else if(password.length < 6){
		alert("La contraseña debe tener mínimo 6 caracteres");
	}
  }
  validarPassword();

  function modelosBicis(){
  	var bicis    = document.getElementsByTagName("select");
  	for(var i = 0; i < bicis.length; i++){
	  if(bicis[i].value == "0"){
	  	alert("Tipo de Bici: Debe elegir una opción");
	  }

    }

  }
  modelosBicis();

}


