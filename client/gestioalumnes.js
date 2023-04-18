class crud{
    constructor(php,arrel="body"){
        this.php=php
        this.arrel=arrel
        this.tr=null

    }
    envia(info,method,obj) {
        if (method=="get"){
            $.get(this.php,info)
        }else if (method=="post"){
            $.post(this.php,info)
        }else if (method=="getjson"){
            $.getJSON(this.php,info,function(data){obj.renderizar(data,obj)})
            
        
        }
    }

    renderizar(data,obj){
        console.log(data)
        if (document.getElementById("alumnes")){$("#alumnes").remove()}
        $(obj.arrel).append("<table id='alumnes'></table>")
        obj.tr=document.createElement("tr")
        $("#alumnes").append(obj.tr)
        Object.keys(data[0]).forEach(key=>{
            $(obj.tr).append("<td>"+key+"</tr>")
        })
        data.forEach(element => {
            obj.tr=document.createElement("tr")
            $("#alumnes").append(obj.tr)
            Object.keys(element).forEach(key=>{
                $(obj.tr).append("<td>"+element[key]+"</tr>")
            })           
        });
    }
}


// let llista = document.getElementById("Llistat").files
let fs= new FileReader()
let contingut=null
function previewFile() {
    const content = document.querySelector("#vamooss");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();

    reader.addEventListener(    
        "load",
        () => {
        // reader.result retorna el que ha legit del archiu
        contingut=reader.result
        content.innerText = contingut ;
        procesa_csv(contingut)   
        },
        false
    );

    if (file) {
        //llegim com un text amb codificació per els caràcters latinss el archiu introduit en el archiu
        reader.readAsText(file,"ISO-8859-1");
    }
    }
function show(mode){
    document.getElementById("Antecio").style.display=mode
}
function procesa_csv(cont){
    show("none")
    let array_linias=cont.split("\r\n")
    var array_final=[]
    let json_string
    array_linias.forEach(element => {
        array_final.push(element.split(","))
    });
    envia(array_final)
    

}
//Importacio a la base de dades desde un csv
function resposta(dades){
    document.querySelector("#vamooss").append(document.createElement("h1").innerHTML="Dades actualizades corectament")
    document.querySelector("#vamooss").append(dades)
}
function envia(array){
    console.log(array.pop())
    $(document).ready(function(){
    $.get("../servidor/consultes/gestioalumnes.php",{"llista":array,"classe":document.querySelector(".Classes").value})
})
}

//peticio al servidor dels registres de una determinada classe
let procesament= new crud("../servidor/consultes/gestioalumnes.php","#taula")
function extreuretaula(){
    procesament.envia({"classe":document.querySelector(".Classes").value,"extreure":true},"getjson",procesament)
    
    
}
//dibuxa una taula amb els alumnes de la classe demanda anteriorment

function alerta(text){
    alert(text)
    document.getElementById("taula").innerHTML=" "
}


