console.log(arreglo);

fetch('http://localhost:3000/productosPorIds?ids='+arreglo)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);

    var lista = document.querySelector('.lista');
    res.forEach(function(fidget){
        lista.innerHTML += '<li><img width="100" src="'+fidget.image+'">' + fidget.direccion + '</li>';
    });
});