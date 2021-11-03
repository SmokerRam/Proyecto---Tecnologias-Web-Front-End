// <!--==================== CONFIRMACION FUNCIONALIDAD ARCHIVO ====================--> //
console.log("Archivo Ajax Top Cargado Correctamente");

// <!--==================== TOP 3 ====================--> //
function cargarDatos(){
    // <!--==================== CARGANDO DATOS JSON ====================--> //
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://127.0.0.1:5500/HTML/Tecnologías%20Web%20Front%20End/Angel%20Ramirez/assets/datos.json', true);
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var datos = JSON.parse(this.responseText);
            // <!--==================== ORDENANDO LA LISTA ====================--> //
            datos["canciones"].sort(ordenarLista)
            var top = document.querySelector('#top');
            top.innerHTML = '';
            var i = 0;
            
            for(var x of datos['canciones']){
                var url = x.ruta
                // <!--==================== TOP 3 ====================--> //
                if(i < 3){
                    // <!--==================== INSERTANDO EN TABLA ====================--> //
                    top.innerHTML += `
                    <tr>
                        <td>${x.nombre.charAt(0).toUpperCase() + x.nombre.slice(1)}</td>
                        <td><audio src="./assets/audio/${url}" controls></audio></td>
                    </tr>
                    `;
                    i++;
                }
            }
        }
    }
}

// <!--==================== ORDENAR MAX REPRODUCCIONES ====================--> //
function ordenarLista(cancionA, cancionB){
    return cancionB.reproducciones - cancionA.reproducciones
}

cargarDatos()