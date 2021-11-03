// <!--==================== CONFIRMACION FUNCIONALIDAD ARCHIVO ====================--> //
console.log("Archivo Main Cargado Correctamente");

// <!--==================== VALIDACION LOGIN ====================--> //
function validarLogin(formulario){
    
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (formulario.inputCorreo.value.trim().length == 0) {
        limpiarErrores();
        document.getElementById("errorCorreo").innerText = "Por favor, escriba un correo electrónico.";
        formulario.inputCorreo.focus();    
    
        return false;
    }

    else{

        if (!re.test(formulario.inputCorreo.value)) {
            limpiarErrores();
            document.getElementById("errorCorreo").innerText = "El correo electrónico no cumple con la estructura estándar.";
            document.getElementById("inputCorreo").value = "";
            formulario.inputCorreo.focus();    
        
            return false;
        }

        else if (!formulario.inputCorreo.value.trim().includes('@')) {
            limpiarErrores();
            document.getElementById("errorCorreo").innerText = "El correo electrónico debe contener el caracter '@'.";
            document.getElementById("inputCorreo").value = "";
            formulario.inputCorreo.focus();    
        
            return false;
        } 
    }

    if (formulario.inputPassword.value.trim().length == 0){
        limpiarErrores();
        document.getElementById("errorPassword").innerText = "Por favor, escriba una contraseña";
        formulario.inputPassword.focus();
    
        return false
      }
    
      else{
        if (formulario.inputPassword.value.length < 8){
          limpiarErrores();
          document.getElementById("errorPassword").innerText = "Contraseña inválida, mínimo de 8 caracteres";
          document.getElementById("inputPassword").value = "";
          formulario.inputPassword.focus();
    
          return false
        }
      }

    return true;
}

function limpiarInputs(){
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPassword").value = "";
  }
  
  function limpiarErrores(){
    document.getElementById("errorCorreo").innerText = "";
    document.getElementById("errorPassword").innerText = "";
    
  }
  