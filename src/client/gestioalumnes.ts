//Aquest archiu js te com a funció administrar tot lo relacionat amb l'alta y baixa dels alumnes de l'escola/institut
//Les pricipals funcions son  mostrar el alumnes , eliminar , tots els alumnes de una classe de cop a partir de un fitxer csv

import { Alumne, registre_alumne } from "../objectes"


const classe=document.querySelector(".Classes") as HTMLSelectElement
require('jquery')

let fs= new FileReader()
var contingut=null
function previewFile() {
    const content = document.querySelector("#vamooss") as HTMLParagraphElement
    const input = document.querySelector("input[type=file]") as HTMLInputElement
    const file:FileList = input.files as FileList
    const reader = new FileReader()

    reader.addEventListener(    
        "load",
        () => {
        // reader.result retorna el que ha legit del archiu
        contingut=reader.result as string
        content.innerText = contingut 
        procesa_csv(contingut)
        }
    );

    if (file[0]) {
        //llegim com un text el archiu introduit en el archiu
        reader.readAsText(file[0],"ISO-8859-1");
        }
    }
function show(mode:string){
    const avis = document.getElementById("Antecio") as HTMLDivElement
    avis.style.display=mode
}
function procesa_csv(cont:string){
    show("none")
    let array_linias:string[]=cont.split("\r\n")
    var array_final:string[]
    array_linias.forEach(function (e:any){
        array_final.push(e.split(','))
    });
    envia(array_final!)
    

}
//Importacio a la base de dades desde un csv
function resposta(dades:string){
    const text = document.querySelector("#vamooss") as HTMLParagraphElement
    text.append(document.createElement("h1").innerHTML="Dades actualizades corectament")
    text.append(dades)
}
function envia(array:Array<string>){
    console.log(array.pop())
    $.get("../servidor/consultes/gestioalumnes.php",{"llista":array,"classe":classe.value},resposta)
}

//petició al servidor d3els registres de una determinada classe
function extreuretaula(){
    
    $.getJSON("../servidor/consultes/gestioalumnes.php",{"classe":classe.value,"extreure":true},procesa_taula)
   
}
//dibuxem la taula amb els alumnes de una derteminada classe retoornats pel servidor 
function procesa_taula(dades: Alumne<number>[]){

    if(document.getElementById("taula")){ //si extieix la taula la eliminem ja que esta desactualizada
        document.getElementById("taula")!.innerHTML=" "
    }
    
    let tabla=document.createElement("table")//creem una nova taula
    tabla.setAttribute("id","llistaalum")
    let TR:HTMLTableRowElement=document.createElement("tr")//creem una fila
    let TH:HTMLTableCellElement=document.createElement("th")//creem una columna
    //afexim la fila amb el nom de les dades a mostrar 
    TH.innerHTML="Num"
    TR.append(TH)
    TH=document.createElement("th")
    TH.innerHTML="Nom"
    TR.append(TH)
    TH=document.createElement("th")
    TH.innerHTML="Primer_cognom"
    TR.append(TH)
    TH=document.createElement("th")
    TH.innerHTML="Segon_cognom"
    TR.append(TH)
    tabla.append(TR)
    //iterem les dades retornades pel servidor
    dades.forEach(function(ele){
        //creem una fila amb les seves columnes per mostrar les dades dels alumnes
        let TR=document.createElement("tr")
        let TD=document.createElement("td")
        TD.innerHTML=`${ele.Num}`
        TR.append(TD)
        TD=document.createElement("td")
        TR.append(TD)
        TD.innerHTML=ele.Nom
        TR.append(TD)
        TD=document.createElement("td")
        TR.append(TD)
        TD.innerHTML=ele.Primer_Cognom
        TR.append(TD)
        TD=document.createElement("td")
        TR.append(TD)
        TD.innerHTML=ele.Segon_Cognom
        TR.append(TD)
        TD=document.createElement("td")
        TR.append(TD)
        // creeem un butó per eliminar els alumnes
        let marc=document.createElement("button")
        marc.setAttribute("id",`${ele.Num}`)
        marc.addEventListener("click",function(){
            let taula:HTMLTableElement =document.getElementById("taula") as HTMLTableElement
            taula.innerHTML=" "
            console.log(this.getAttribute("id"))
            let IDEN=this.getAttribute("id")
            $.getJSON("../servidor/consultes/gestioalumnes.php",{"classe":classe.value,"id":IDEN},procesa_taula)
    

        })
        marc.innerHTML="Elimina"
        TD.append(marc)       
        tabla.append(TR)
      
        
    })
    //formulari per donar l'alta a un alumne 
    TR=document.createElement("tr")
    let Td=document.createElement("td")

   
   
    Td=document.createElement("td")
    let entrada=document.createElement("input")
    entrada.setAttribute("type","number")
    let num=entrada.value
    Td.append(entrada)
    TR.append(Td)
    
    Td=document.createElement("td")
    entrada=document.createElement("input")
    entrada.setAttribute("type","text")
    entrada.setAttribute("name","nom")
    let nom=entrada.value
    Td.append(entrada)
    TR.append(Td)
    
    Td=document.createElement("td")
    entrada=document.createElement("input")
    entrada.setAttribute("type","text")
    entrada.setAttribute("name","primer")
    let primer=entrada.value
    Td.append(entrada)
    TR.append(Td)
    
    Td=document.createElement("td")
    entrada=document.createElement("input")
    entrada.setAttribute("type","text")
    entrada.setAttribute("name","segon")
    let segon=entrada.value
    Td.append(entrada)
    TR.append(Td)
    
    Td=document.createElement("td")
    let entrada2=document.createElement("button")
    entrada2.innerHTML="Afexeix alumne"
    entrada2.addEventListener("click",function(){
        let noualumne:registre_alumne = {
            classe:classe.value,
            Num:document.querySelectorAll("input")[0].value,
            Nom:document.querySelectorAll("input")[1].value,
            Primer_Cognom:document.querySelectorAll("input")[2].value,
            Segon_Cognom:document.querySelectorAll("input")[3].value,
        }
        
        if(document.querySelectorAll("input")[3].value=="" ||document.querySelectorAll("input")[3].value==null){document.querySelectorAll("input")[3].value="\0"}
        $.getJSON("../servidor/consultes/gestioalumnes.php",noualumne,procesa_taula)        
    })
    Td.append(entrada)
    TR.append(Td)
    tabla.append(TR)


    //actualiuzem la tabla amb els valors adecuats

    let novataula: HTMLTableElement = document.getElementById("taula") as HTMLTableElement
    novataula.append(tabla)
}