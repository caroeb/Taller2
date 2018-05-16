console.log(arreglo);

fetch('http://localhost:3000/productosPorIds?ids='+arreglo)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);

    var lista = document.querySelector('.lista');
    res.forEach(function(elem){
        lista.innerHTML += `<tr>
        <td>` + elem.marca +` ` + elem.modelo + `</td>
        <td>` + elem.precio + `</td>
        <td>20 Febrero - 24 Febrero </td>
        <td>4 Días</td>
        <td> ` + elem.precio * 4 + ` </td>
        <td><i class="fas fa-times-circle" title="Eliminar"></i></td>
        </tr>
        `; 
    });
});