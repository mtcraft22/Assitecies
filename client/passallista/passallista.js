let incidecies=document.getElementById("opcions")
incidecies.style.display='none'
incidecies.style.position="absolute"
//fem la peticio al servidor
function peticio_lista(){
    $.getJSON("./../../servidor/consultes/Assistencies.php",{"Classe":document.getElementById("Classes").value,"extreure":true},procesa_taula)
    document.getElementById("data-final").value=""
    document.getElementById("data-inici").value=""
    
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
            var td = document.createElement("td")
            td.style.width="20px"
            if (itemele=="Ha vingut"){
                td.innerHTML="&#128515"
            }else{
                td.innerHTML=itemele
            }
            
            tr.append(td)
            let alunum =td.parentNode.querySelectorAll("td")[0].textContent         
            td.addEventListener("click",function(e){
                var child = td
                var parent = child.parentNode;
                var childNodes = parent.childNodes;
                var count = childNodes.length;
                var child_index;
                for (let i = 0; i < count; ++i) {
                    if (child === childNodes[i]) {
                        child_index = i;
                        break;
                    }
                }
                let date = taula.querySelector("tr").querySelectorAll("td")[child_index].textContent
                if (child_index<4){date=undefined}
                conf_inicidencia(e,alunum ,date)
            })
        })
        taula.append(tr)
    })
    document.getElementById("taula-contenidor").append(taula)
}
let incidencia=""
let numalu=0
let data=""
function setinci(inci){
    incidencia=inci
    if(document.getElementById("data-final").value!="" && document.getElementById("data-inici").value!=""){
        $.getJSON("./../../servidor/consultes/Assistencies.php",{
                                                            
                                                                    "Classe":document.getElementById("Classes").value,
                                                                    "Data_final":document.getElementById("data-final").value,
                                                                    "Data_inicial":document.getElementById("data-inici").value,
                                                                    "data":data,
                                                                    "Tipus_Assistencia":incidencia,
                                                                    "_Numero":numalu
                                                                },procesa_taula)

                                                
    }else{
        $.getJSON("./../../servidor/consultes/Assistencies.php",{
            "Classe":document.getElementById("Classes").value,


            "data":data,
            "Tipus_Assistencia":incidencia,
            "_Numero":numalu
        },procesa_taula)
    }

    incidecies.style.display='none'                                                    
    }
    
function conf_inicidencia(e,numalup,datap){  
    if (data!=undefined){
        incidecies.style.display='inline'
        incidecies.style.top=e.clientY+20 +"px"
        incidecies.style.left=e.clientX +"px"
        data=datap
        numalu=numalup
    }

}
document.addEventListener("keydown",function(e){
    if(e.key === "Escape") {
        incidecies.style.display='none'
    } 
})
function procesa_data(){
    if(document.getElementById("data-final").value!="" && document.getElementById("data-inici").value!=""){
        $.getJSON("./../../servidor/consultes/Assistencies.php",{
                                                                    "Classe":document.getElementById("Classes").value,
                                                                    "extreure":true,
                                                                    "Data_final":document.getElementById("data-final").value,
                                                                    "Data_inicial":document.getElementById("data-inici").value
                                                                },procesa_taula)
    }
    else{
        alert("CAL POSAR UNA DATA PER FILTRAR")
    }
}