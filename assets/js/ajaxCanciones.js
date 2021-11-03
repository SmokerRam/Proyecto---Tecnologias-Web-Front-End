// <!--==================== CONFIRMACION FUNCIONALIDAD ARCHIVO ====================--> //
console.log("Archivo Ajax Canciones Cargado Correctamente");

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
                            <div class="text-center border">
                                <img src="../assets/img/icon/icon_${icon}.svg" class="w-25" alt="icono">
                            </div>
                        <div class="card-body bg-white">
                            <h5 class="card-title">${x.nombre.charAt(0).toUpperCase() + x.nombre.slice(1)}</h5>
                            <p class="card-text"><audio src="../assets/audio/${url}" controls></audio></p>
                        </div>
                    </div>
                `;
               
            }
        }
    }
}

function buscarCancions(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://127.0.0.1:5500/HTML/Tecnologías%20Web%20Front%20End/Angel%20Ramirez/assets/datos.json', true);
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var datos = JSON.parse(this.responseText);
            const formulario = document.querySelector('#inputBusqueda');
            
            const filtrar = ()=>{
                const texto = formulario.value.toLowerCase();
                const canciones = document.querySelector('#canciones');
                canciones.innerHTML = '';
                
                for(let x of datos['canciones']){
                    let nombre = x.nombre.toLowerCase();
                    let icon = x.icono
                    let url = x.url

                    if(nombre.indexOf(texto) !== -1){
                        canciones.innerHTML += `
                            <div class="col-12 col-md-4 mb-2">
                                <div class="card bg-light text-center">
                                    <div class="text-center border">
                                        <img src="../assets/img/icon/icon_${icon}.svg" class="w-25" alt="icono">
                                    </div>
                                <div class="card-body bg-white">
                                    <h5 class="card-title">${x.nombre.charAt(0).toUpperCase() + x.nombre.slice(1)}</h5>
                                    <p class="card-text"><audio src="../assets/audio/${url}" controls></audio></p>
                                </div>
                            </div>
                        `;
                    }   
                }

                if(canciones.innerHTML === ''){
                    canciones.innerHTML = `
                            <h2>Canci&oacuten no encontrada</h2>
                        `;
                }
            }

            formulario.addEventListener('input', filtrar);
        }
    }
}

cargarDatos()
buscarCancions()