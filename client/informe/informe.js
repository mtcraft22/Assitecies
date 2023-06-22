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
function render_inform() {
        return null;
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
    let trariba = document.createElement("tr");
    taula.append(trariba);
    let tr = document.createElement("tr");

    for (let i = 0; i < Object.keys(dades[0]).length; i++) {

        if (i > 3) {
            let td = document.createElement("td");

            let date = Object.keys(dades[0])[i].split("_");
            td.innerHTML = date[0];
            tr.append(td);
            if (!count_columna[date[1]]) {
                Object.assign(count_columna, count_columna[date[1]] = 1);
            } else {
                count_columna[date[1]]++;
            }
        } else {
            let td = document.createElement("td");
            td.innerHTML = Object.keys(dades[0])[i];
            tr.append(td);
        }

    }

    taula.append(tr);
    document.getElementById("informe").append(taula);
    let td_mes = document.createElement("td");
    trariba.append(td_mes);
   
    td_mes.style.background = "none";
    td_mes.style.border = "none";
    td_mes = document.createElement("td");
    trariba.append(td_mes);
    td_mes.style.background = "none";
    td_mes.style.border = "none";
    td_mes = document.createElement("td");
    trariba.append(td_mes);
    td_mes.style.background = "none";
    td_mes.style.border = "none";
    td_mes = document.createElement("td");
    trariba.append(td_mes);
    td_mes.style.background = "none";
    td_mes.style.border = "none";
    Object.entries(count_columna).forEach(function (key) {
        let td_mes = document.createElement("td");
        td_mes.setAttribute("colspan", key[1]);
        td_mes.innerHTML = meses[ parseInt(key[0])];
        trariba.append(td_mes);
    });



    console.log(count_columna)

    dades.forEach(function (item) {
        let tr = document.createElement("tr")

        Object.values(item).forEach(function (itemele) {
            var td = document.createElement("td")
            td.style.width = "20px"
            if (itemele === "Ha vingut") {
                td.innerHTML = "&#x1F7E2";
            } else if (itemele === "Festiu") {
                td.innerHTML = "&#x1F389";
            } else if (itemele === "RetardMati") {
                td.innerHTML = "&#x1F610";
            } else if (itemele === "Absencia Total") {
                td.innerHTML = "&#x1f534";
            } else if (itemele === "RetardTarda") {
                td.innerHTML = "&#x1F611";
            } else if (itemele === "AbsenciaMati") {
                td.innerHTML = "&#128993";
            } else if (itemele === "AbsenciaTarda") {
                td.innerHTML = "&#128992";
            } else {
                td.innerHTML = itemele;
            }
            tr.append(td);
           

            
        });
        taula.append(tr);
    });
    document.getElementById("informe").prepend(taula);
}





