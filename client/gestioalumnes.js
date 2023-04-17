
class crud{
    
    
    constructor(php,parent){
        this.php=php
        this.tr=null
        this.parent=parent
    }
    
    envia(info,method) {
        console.log(this.php)
        if (method=="get"){
            $.get(this.php,info)
        }else if (method=="post"){
            $.post(this.php,info)
        }else if (method=="getjson"){
            $.getJSON(this.php,info,this.renderizar)
        }
    }
    renderizar(data){
        parent=this.parent
        $(parent).append("<table id='alumnes'></table>")
        this.tr=document.createElement("tr")
        $("#alumnes").append(this.tr)
        Object.keys(data[0]).forEach(key=>{
            $(this.tr).append("<td>"+key+"</tr>")
            
        })
        data.forEach(element => {
            
            this.tr=document.createElement("tr")
            $("#alumnes").append(this.tr)
            Object.keys(element).forEach(key=>{
                $(this.tr).append("<td>"+element[key]+"</tr>")
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
    $.get("../servidor/consultes/gestioalumnes.php",{"llista":array,"classe":document.querySelector(".Classes").value},resposta)
})
}

//peticio al servidor dels registres de una determinada classe
let procesament= new crud("../servidor/consultes/gestioalumnes.php",document.getElementById("taula"))
function extreuretaula(){
    procesament.envia({"classe":document.querySelector(".Classes").value,"extreure":true},"getjson")
    //$.getJSON("../servidor/consultes/gestioalumnes.php",{"classe":document.querySelector(".Classes").value,"extreure":true},procesa_taula)
    
}
//dibuxa una taula amb els alumnes de la classe demanda anteriorment

function alerta(text){
    alert(text)
    document.getElementById("taula").innerHTML=" "
}






// function procesa_taula(dades){

//     if(document.getElementById("taula")){
//         document.getElementById("taula").innerHTML=" "
//     }
    
//     let tabla=document.createElement("table")
//     let TR=document.createElement("tr")
//     let TH=document.createElement("th")
//     TH.innerHTML="Num"
//     TR.append(TH)
//     TH=document.createElement("th")
//     TH.innerHTML="Nom"
//     TR.append(TH)
//     TH=document.createElement("th")
//     TH.innerHTML="Primer_cognom"
//     TR.append(TH)
//     TH=document.createElement("th")
//     TH.innerHTML="Segon_cognom"
//     TR.append(TH)
//     tabla.append(TR)
//     dades.forEach(function(ele){
//         let TR=document.createElement("tr")
//         let TD=document.createElement("td")
//         TD.innerHTML=ele.Num
//         TR.append(TD)
//         TD=document.createElement("td")
//         TR.append(TD)
//         TD.innerHTML=ele.Nom
//         TR.append(TD)
//         TD=document.createElement("td")
//         TR.append(TD)
//         TD.innerHTML=ele.Primer_Cognom
//         TR.append(TD)
//         TD=document.createElement("td")
//         TR.append(TD)
//         TD.innerHTML=ele.Segon_Cognom
//         TR.append(TD)
//         TD=document.createElement("td")
//         TR.append(TD)
//         let marc=document.createElement("button")
//         marc.setAttribute("id",ele.Num)
//         marc.addEventListener("click",function(){
//             document.getElementById("taula").innerHTML=" "
//             console.log(this.getAttribute("id"))
//             let IDEN=this.getAttribute("id")
//             $.getJSON("../servidor/consultes/gestioalumnes.php",{"classe":document.querySelector(".Classes").value,"id":IDEN},procesa_taula)
            

//         })
//         marc.innerHTML="Elimina"
//         TD.append(marc)       
//         tabla.append(TR)
      
        
//     })
//     //formulari per donar l'alta a un alumne 
//     TR=document.createElement("tr")
//     TH=document.createElement("td")

   
   
//     Td=document.createElement("td")
//     let entrada=document.createElement("input")
//     entrada.setAttribute("type","number")
//     let num=entrada.value
//     Td.append(entrada)
//     TR.append(Td)
    
//     Td=document.createElement("td")
//     entrada=document.createElement("input")
//     entrada.setAttribute("type","text")
//     entrada.setAttribute("name","nom")
//     let nom=entrada.value
//     Td.append(entrada)
//     TR.append(Td)
    
//     Td=document.createElement("td")
//     entrada=document.createElement("input")
//     entrada.setAttribute("type","text")
//     entrada.setAttribute("name","primer")
//     let primer=entrada.value
//     Td.append(entrada)
//     TR.append(Td)
    
//     Td=document.createElement("td")
//     entrada=document.createElement("input")
//     entrada.setAttribute("type","text")
//     entrada.setAttribute("name","segon")
//     let segon=entrada.value
//     Td.append(entrada)
//     TR.append(Td)
    
//     Td=document.createElement("td")
//     entrada=document.createElement("button")
//     entrada.innerHTML="Afexeix alumne"
//     entrada.addEventListener("click",function(){
//         $.get("../servidor/consultes/gestioalumnes.php",{
//             "classe":document.querySelector(".Classes").value,
//             "num":document.querySelectorAll("input")[0].value,
//             "nom":document.querySelectorAll("input")[1].value,
//             "primer":document.querySelectorAll("input")[2].value,
//             "segon":document.querySelectorAll("input")[3].value,
//         },alerta("alumne afexit corectament"))        
//     })
//     Td.append(entrada)
//     TR.append(Td)
//     tabla.append(TR)


//     //actualiuzem la tabla amb els valors adecuats

//     document.getElementById("taula").append(tabla)
// }

