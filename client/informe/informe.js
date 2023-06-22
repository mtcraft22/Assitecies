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
        return null;
    }
function procesa_taula(dades) {
    var count_columna = {};
    if (document.getElementById("taula")) {
        document.getElementById("taula").remove();
    }

    let taula = document.createElement("table");
    taula.setAttribute("id", "taula");
    
    let tr = document.createElement("tr");
    tr.setAttribute("id","primero")

    
    td = document.createElement("td");
    td.innerHTML=" Hv"
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
    
    
    for (let i = 0; i < Object.keys(dades[0]).length; i++) {

        document.getElementById("primero").prepend(document.createElement("td"))

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
            
            var td = document.createElement("td")
            td.style.width = "20px"
            if (itemele === "Ha vingut") {
                td.innerHTML = "&#x1F7E2";
                havingut ++
            } else if (itemele === "Festiu") {
                td.innerHTML = "&#x1F389";
                Festiu ++
            } else if (itemele === "RetardMati") {  
                td.innerHTML = "&#x1F610";
                retards ++
            } else if (itemele === "Absencia Total") {
                td.innerHTML = "&#x1f534";
                absenciestotals ++
            } else if (itemele === "RetardTarda") {
                td.innerHTML = "&#x1F611";
                retards ++
            } else if (itemele === "AbsenciaMati") {
                td.innerHTML = "&#128993";
                absenciesparcials ++
            } else if (itemele === "AbsenciaTarda") {
                td.innerHTML = "&#128992";
                absenciesparcials ++
            } else {
                td.innerHTML = itemele;
            }
            
            tr.append(td);
            
            
            

            
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
}





