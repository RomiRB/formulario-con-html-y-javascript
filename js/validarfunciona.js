function validar(){
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var telefono=document.getElementById("telefono").value;
	var email=document.getElementById("email").value;
	var edad=parseInt(document.getElementById("edad").value);
	var sololetras= /[a-zA-ZñÑ\s]/; // solo letras
	var expresion= /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;//---- comprobar mail con expresiones regulares------//
	


	if(nombre === "" || apellido === "" || telefono === "" || email === "" || edad === ""){
		alert("Todos los campos son obligatorios");
		return false;
	}

	//-------------solo letras en el nombre + mínimo y máximo del mismo------------//

	else if(!sololetras.test(nombre)){
		alert("Sólo se aceptan letras en el campo nombre");
		return false;
	}
	else if(nombre.length<3){
		alert("Ha ingresado un nombre muy corto");
		return false;
	}
	else if(nombre.length>20){
		alert(" Ha ingresado un nombre muy largo");
		return false;
	}
	//-------------solo letras en el apellido + mínimo y máximo del mismo------------//

	else if(!sololetras.test(apellido)){
		alert("Sólo se aceptan letras en el campo apellido");
		return false;
	}
	else if(apellido.length<3){
		alert("Ha ingresado un apellido muy corto");
		return false;
	}
	else if(apellido.length>30){
		alert(" Ha ingresado un apellido muy largo");
		return false;
	}

	//-----------comprobar que el teléfono tenga sólo números + mínimo de 8 y un máximo de 11 caracteres---------//

	else if(isNaN(telefono)){
		alert("El teléfono ingresado no contiene números");
		return false;
	}
	else if(telefono.length<8 || telefono.length>11){
		alert("Su telefono puede tener un mínimo de 8 y un máximo de 11 caracteres");
		return false;
	}
	//------------ comprobar mail con expresiones regulares--------------//

	else if(!expresion.test(email)){
		alert("El email no es válido");
		return false;
	}
	//-----------comprobar que el teléfono tenga sólo números + mayor de 18 años para ingresar---------//
	
	else if(isNaN(edad)){
		alert("La edad ingresada no contiene números");
		return false;
	}
	else if(edad<18){
		alert("Debe ser mayor de edad para ingresar");
		return false;
	}

} 