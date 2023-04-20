//import {crud}  from './../CRUD/crud.js'
class crudgestalum extends crud{
    constructor(php,parent){
        super(php,parent)
    }
    renderizar(data,obj){
        super.renderizar(data,obj)
        let taula=document.getElementById("taula")
        let trs=taula.querySelectorAll("tr")
        for (let e of trs){
            let td = document.createElement("td")
            let but = document.createElement("button")
            but.innerHTML="envia"
            td.append(but)
            e.append(td)
        }
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
let procesament= new crudgestalum("../servidor/consultes/gestioalumnes.php","#taula")
function extreuretaula(){
    procesament.envia({"classe":document.querySelector(".Classes").value,"extreure":true},"getjson",procesament)
}
//dibuxa una taula amb els alumnes de la classe demanda anteriorment
function alerta(text){
    alert(text)
    document.getElementById("taula").innerHTML=" "
}


