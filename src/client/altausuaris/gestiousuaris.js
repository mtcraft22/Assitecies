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
        td = document.createElement("td")
        let but=document.createElement("button")
        but.innerHTML="Elimina"
        but.addEventListener("click",function(e,fila=tr){
            $.getJSON("./../../servidor/consultes/usuaris.php",{"extreure":true,"Usuari":fila.children[0].textContent},procesa_taula)
        })
        td.append(but)
        tr.append(td)
        taula.append(tr)
    })
    tr = document.createElement("tr")
    
    Object.keys(dades[0]).forEach(function(e){
        var td = document.createElement("td")
        console.log(e)
        if (e === "USUARI"){
            let inp=document.createElement("input")
            td.append(inp)
        }else if(e==="CONTRASENYA"){
            let inp=document.createElement("input")
            inp.setAttribute("type","password")
            td.append(inp) 
        }else if(e==="TIPUSUSUARI"){
            let seleccio=document.createElement("select")
            let Met=document.createElement("option")
            Met.setAttribute("value","Mestre")
            seleccio.append(Met)
            let Admin=document.createElement("option")
            Admin.setAttribute("value","Administrador")
            seleccio.append(Admin)
            let Secre=document.createElement("option")
            Secre.setAttribute("value","Secretari")
            seleccio.append(Secre)
            td.append(seleccio)
            Met.innerHTML="Mestre"
            Admin.innerHTML="Administrador"
            Secre.innerHTML="Secretari"
        }else{
            td.innerHTML="Auto id"
        }
        tr.append(td)
    })
    let but2=document.createElement("button")
    but2.innerHTML="Afexeix"
    but2.addEventListener("click",function(){
        $.getJSON("./../../servidor/consultes/usuaris.php",{"extreure":true,
                                                            "Usuari":document.querySelectorAll("input")[0].value,
                                                            "Contrasenya":document.querySelectorAll("input")[1].value,
                                                            "Tipus":document.querySelector("select").value},procesa_taula)
    })
    td = document.createElement("td")
    td.append(but2)
    tr.append(td)
    
    taula.append(tr)
    document.getElementById("taula-contenidor").append(taula)
}