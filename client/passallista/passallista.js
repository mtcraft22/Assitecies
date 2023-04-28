let incidecies=document.getElementById("opcions")
incidecies.style.display='none'
incidecies.style.position="absolute"
//fem la peticio al servidor

function peticio_lista(){
    $.getJSON("./../../servidor/consultes/Assistencies.php",{"Classe":document.getElementById("Classes").value,"extreure":true},procesa_taula)
}
//procesem la respota del servidor
function procesa_taula(dades){
    dades.array.forEach(function (e){
        Object.keys(e).forEach(function(keys))
    });
}




//mostrem lista de tipus de incidecies en las posiion del ratoli bquan es fa click
// document.getElementById("taula").addEventListener("click",function(e){
//     incidecies.style.display='inline'
//     incidecies.style.top=e.clientY +"px"
//     incidecies.style.left=e.clientX +"px"


// })