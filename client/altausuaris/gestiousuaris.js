//fem la peticio al servidor

$.getJSON("./../../servidor/consultes/usuaris.php",{"extreure":true},procesa_taula)

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
            var td = document.createElement("td")
            td.innerHTML=itemele
            tr.append(td)
        })
        let but=document.createElement("button")
        but.innerHTML="Elimina"
        tr.append(but)
        taula.append(tr)
    })
    tr = document.createElement("tr")
    Object.keys(dades[0]).forEach(function(e){
        let td = document.createElement("td")
        console.log(e)
        
        if (e !="ID" && e!="CONTRASENYA"){
            let inp=document.createElement("input")
            td.append(inp)
        }else if(e==="CONTRASENYA"){
            let inp=document.createElement("input")
            inp.setAttribute("type","password")
            td.append(inp) 
        }
       
        
        tr.append(td)
    })
    taula.append(tr)
    document.getElementById("taula-contenidor").append(taula)
}