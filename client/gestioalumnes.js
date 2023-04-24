//import {crud}  from './../CRUD/crud.js'
class crudgestalum extends crud{
    constructor(php,parent){
        super(php,parent)
    }
    renderizar(data,obj){
        super.renderizar(data,obj)
        let taula=document.getElementById("taula")
        let trs=taula.querySelectorAll("tr")
        for (let i=0;i<trs.length-1; i++ ){
            let td = document.createElement("td")
            let but = document.createElement("button")
            but.innerHTML="eliminar"
            but.addEventListener("click",function(){obj.envia({"classe":document.querySelector(".Classes").value,"id":trs[i+1].children[0].innerHTML},"getjson",obj)})
            td.append(but)
            trs[i+1].append(td)
        }
        let trinputs = document.createElement("tr")
        
        for (let e of trs[0].children){
            let input = document.createElement("input")
            input.setAttribute("type","input")
            input.setAttribute("id",e.textContent)
            let td = document.createElement("td")
            td.append(input)
            trinputs.append(td)
        }
        taula.querySelector("table").append(trinputs)
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


