var meses = {
    1: "Gen",
    2: "Feb",
    3: "Mar",
    4: "Abr",
    5: "Mai",
    6: "Jun",
    7: "Jul",
    8: "Ago",
    9: "Set",
    10: "Oct",
    11: "Nov",
    12: "Des"
};

function request_data(){
        $.getJSON("../../servidor/consultes/gernerarinforme.php",
        {
            "Month":document.getElementById("select-month").value,
            "Class":document.getElementById("select-class").value
         
        },procesa_taula
        
        )
}
function request_inform(){
        cosa="<meta charset='utf-8'>"
        cosa+=document.getElementById("informe").outerHTML
        $.post("../../servidor/consultes/gernerarinforme.php",
        {
            "Html":cosa
         
        })
        
    }
function procesa_taula(dades) {
    
    var count_columna = {};
    if (document.getElementById("taula")) {
        document.getElementById("taula").remove();
    }

    let taula = document.createElement("table");
    if(document.getElementById("linkpdf")){document.getElementById("linkpdf").remove()}
    let link = document.createElement("a")
    link.setAttribute("id","linkpdf")
    link.setAttribute("href","../../servidor/consultes/informe.pdf")
    link.setAttribute("target","_blank")
    link.setAttribute("dowload","informe.pdf")
    link.innerHTML="Vizualiza en pdf"
    
    
    taula.setAttribute("id", "taula");
    taula.setAttribute("style","font-family: DejaVu Sans;")
    
    let tr = document.createElement("tr");
    tr.setAttribute("id","primero")

    
    td = document.createElement("td");
    td.innerHTML=" Hv "
    tr.append(td)
    td = document.createElement("td");
    td.innerHTML=" R "
    tr.append(td)
    td = document.createElement("td");
    td.innerHTML=" AP "
    tr.append(td)
    td = document.createElement("td");
    td.innerHTML=" AT"
    tr.append(td)
    td = document.createElement("td");
    td.innerHTML=" F "
    tr.append(td)
    taula.append(tr);
    document.getElementById("informe").append(taula);
    
    
    for (let i = 0; i < 4; i++) {
        let a =document.createElement("td")
        a.setAttribute("id","fora")
        document.getElementById("primero").prepend(a)

    }


    console.log(count_columna)

    dades.forEach(function (item) {
        let tr = document.createElement("tr")
     
               
            
        let havingut = 0
        let retards = 0
        let absenciesparcials = 0
        let absenciestotals = 0
        let Festiu = 0
        Object.values(item).forEach(function (itemele) {

           
            td.style.width = "20px"
            if (itemele === "Ha vingut") {
             
                havingut++
            } else if (itemele === "Festiu") {
               
                Festiu++
            } else if (itemele === "RetardMati") {
              
                retards++
            } else if (itemele === "Absencia Total") {
             
                absenciestotals++
            } else if (itemele === "RetardTarda") {
          
                retards++
            } else if (itemele === "AbsenciaMati") {
          
                absenciesparcials++
            } else if (itemele === "AbsenciaTarda") {
            
                absenciesparcials++
            } else{
                td=document.createElement("td")
                td.innerHTML = itemele;
                tr.append(td)
            }
                
            

            





        });
            
            td = document.createElement("td");
            td.innerHTML=" " +havingut + " "
            tr.append(td)
            td = document.createElement("td");
            td.innerHTML=" " +retards+ " "
            tr.append(td)
            td = document.createElement("td");
            td.innerHTML=" " +absenciesparcials+ " "
            tr.append(td)
            td = document.createElement("td");
            td.innerHTML=" " +absenciestotals+ " "
            tr.append(td)
            td = document.createElement("td");
            td.innerHTML= " " +Festiu+ " "
            tr.append(td)
        
        taula.append(tr);
        
        
    });
    
    
            
    document.getElementById("informe").prepend(taula);
    document.getElementById("informe").parentElement.prepend(link);
    request_inform();
        
}





