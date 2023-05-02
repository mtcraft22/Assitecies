let incidecies=document.getElementById("opcions")
incidecies.style.display='none'
incidecies.style.position="absolute"
//fem la peticio al servidor

function peticio_lista(){
    $.getJSON("./../../servidor/consultes/Assistencies.php",{"Classe":document.getElementById("Classes").value,"extreure":true},procesa_taula)
}
//procesem la respota del servidor
function procesa_taula(dades){
    if (document.getElementById("taula")){document.getElementById("taula").remove()}
    let taula= document.createElement("table")
    taula.setAttribute("id","taula")
    let tr = document.createElement("tr")
    Object.keys(dades[0]).forEach(function(e){
        let td = document.createElement("td")
        td.innerHTML=e
        tr.append(td)
    })
    taula.append(tr)
    dades.forEach(function(item){
        let tr = document.createElement("tr")
        Object.values(item).forEach(function(itemele){
            let td = document.createElement("td")
            td.innerHTML=itemele
            
            tr.append(td)
            let alunum =td.parentNode.querySelectorAll("td")[0].textContent
            let inn= [td.parentElement.children].indexOf(td)
            let date= taula.querySelector("tr").querySelectorAll("td")[inn]
            td.addEventListener("click",function(){ conf_inicidencia(alunum ,date)})
        })
        taula.append(tr)
    })
    document.getElementById("taula-contenidor").append(taula)
}


function conf_inicidencia(numalu,data){
    console.log(`El num del alumne es: ${numalu} la data a modificar es: ${data}`)
}

//mostrem lista de tipus de incidecies en las posiion del ratoli bquan es fa click
// document.getElementById("taula").addEventListener("click",function(e){
//     incidecies.style.display='inline'
//     incidecies.style.top=e.clientY +"px"
//     incidecies.style.left=e.clientX +"px"


// })