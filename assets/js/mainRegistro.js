// <!--==================== FUNCIONALIDAD ARCHIVO ====================--> //
console.log("Archivo MainRegistro Cargado Correctamente");

limpiarInputs();
limpiarErrores();

// <!--==================== VALIDACION REGISTRO ====================--> //
function validarRegistro(formulario){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (formulario.inputCorreo.value.trim().length == 0){
        limpiarErrores();
        document.getElementById("errorCorreo").innerText = "Campo obligatorio"
        formulario.inputCorreo.focus();
    
        return false
    }

    else{
        if (!re.test(formulario.inputCorreo.value)){
            limpiarErrores();
            document.getElementById("errorCorreo").innerText = "Correo Invalido"
            document.getElementById("inputCorreo").value = "";
            formulario.inputCorreo.focus();

            return false
        }
    }

    if (formulario.inputPassword.value.trim().length == 0){
        limpiarErrores();
        document.getElementById("errorPassword").innerText = "Campo Obligatorio";
        formulario.inputPassword.focus();
    
        return false
    }

    else{
        if (formulario.inputPassword.value.length < 8){
            limpiarErrores();
            document.getElementById("errorPassword").innerText = "Contraseña inválida, mínimo 8 caracteres";
            document.getElementById("inputPassword").value = "";
            formulario.inputPassword.focus();

            return false
        }
    }
    
    if (formulario.inputConfirmarPassword.value.trim().length == 0){
        limpiarErrores();
        document.getElementById("errorConfirmarPassword").innerText = "Campo Obligatorio";
        formulario.inputConfirmarPassword.focus();
    
        return false
    }

    else{
        if (formulario.inputPassword.value != formulario.inputConfirmarPassword.value){
            limpiarErrores();
            document.getElementById("errorConfirmarPassword").innerText = "Las contraseñas no coinciden";
            document.getElementById("inputPassword").value = "";
            document.getElementById("inputConfirmarPassword").value = "";
            formulario.inputPassword.focus();

            return false
        }
    }

    if (formulario.inputGeneroFavorito.value == "" || formulario.inputGeneroFavorito.value == "0") {
        limpiarErrores();
        document.getElementById("errorGeneroFavorito").innerText = "Campo Obligatorio";
    
        return false;
    }

    if (formulario.inputEdad.value == "") {
        limpiarErrores();
        document.getElementById("errorEdad").innerText = "Campo Obligatorio";
    
        return false;
    }

    if (!formulario.inputTerminos.checked) {
        limpiarErrores();
        document.getElementById("errorTerminos").innerText = "Campo Obligatorio";

        return false;
    }

    return true
}

// <!--==================== LIMPIAR LOS INPUTS ====================--> //
function limpiarInputs(){
    document.getElementById("inputCorreo").value = "";
    document.getElementById("inputPassword").value = "";
    document.getElementById("inputConfirmarPassword").value = "";
    document.getElementById("inputGeneroFavorito").value = "0";
    document.getElementById("inputEdad").value = "";
    document.getElementById("inputTerminos").value = "";
}

// <!--==================== LIMPIAR LOS ERRORES ====================--> //
function limpiarErrores(){
    document.getElementById("errorCorreo").innerText = "";
    document.getElementById("errorPassword").innerText = "";
    document.getElementById("errorConfirmarPassword").innerText = "";
    document.getElementById("errorGeneroFavorito").innerText = "";
    document.getElementById("errorEdad").innerText = "";
    document.getElementById("errorTerminos").innerText = "";
}
  