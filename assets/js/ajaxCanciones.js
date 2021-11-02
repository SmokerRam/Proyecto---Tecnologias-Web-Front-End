// <!--==================== CONFIRMACION FUNCIONALIDAD ARCHIVO ====================--> //
console.log("Archivo Ajax Cargado Correctamente");

// <!--==================== CANCIONES ====================--> //
function cargarDatos(){
    // <!--==================== CARGANDO DATOS JSON ====================--> //
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://127.0.0.1:5500/HTML/Tecnologías%20Web%20Front%20End/Angel%20Ramirez/assets/datos.json', true);
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var datos = JSON.parse(this.responseText);
            var canciones = document.querySelector('#canciones');
            canciones.innerHTML = '';
            
            for(var x of datos['canciones']){
                var url = x.ruta
                var icon = x.icono

                canciones.innerHTML += `
                    <div class="col-12 col-md-4 mb-2">
                        <div class="card bg-light text-center">
                            <div class="text-center">
                                <img src="../assets/img/icon/icon_${icon}.svg" class="w-25" alt="icono">
                            </div>
                        <div class="card-body bg-white">
                            <h5 class="card-title">${x.nombre}</h5>
                            <p class="card-text"><audio src="../assets/audio/${url}" controls></audio></p>
                        </div>
                    </div>
                `;
               
            }
        }
    }
}

cargarDatos()