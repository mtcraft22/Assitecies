try{
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
let incidecies = document.getElementById("opcions");
incidecies.style.display = 'none';
incidecies.style.position = "absolute";
//fem la peticio al servidor

function peticio_lista() {
    $.getJSON("./../../servidor/consultes/Assistencies.php", {"Classe": document.getElementById("Classes").value, "extreure": true}, procesa_taula);
    document.getElementById("data-final").value = "";
    document.getElementById("data-inici").value = "";

}
//procesem la respota del servidor
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
    document.getElementById("taula-contenidor").append(taula);
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
            let alunum = td.parentNode.querySelectorAll("td")[0].textContent;

            td.addEventListener("click", function (e) {
                var child = td;
                var parent = child.parentNode;
                var childNodes = parent.childNodes;
                var count = childNodes.length;
                var child_index;
                for (let i = 0; i < count; ++i) {
                    if (child === childNodes[i]) {
                        child_index = i;
                        break
                    }
                }
                let date = Object.keys(dades[0])[child_index];
                if (child_index < 4) {
                    date = undefined;
                }
                conf_inicidencia(e, alunum, date);
            });
        });
        taula.append(tr);
    });
    document.getElementById("taula-contenidor").prepend(taula);
}
let incidencia = "";
let numalu = 0;
let data = "";
function setinci(inci) {
    incidencia = inci;
    if (document.getElementById("data-final").value !== "" && document.getElementById("data-inici").value !== "") {
        $.getJSON("./../../servidor/consultes/Assistencies.php", {

            "Classe": document.getElementById("Classes").value,
            "Data_final": document.getElementById("data-final").value,
            "Data_inicial": document.getElementById("data-inici").value,
            "data": data,
            "Tipus_Assistencia": incidencia,
            "_Numero": numalu
        }, procesa_taula);


    } else {
        $.getJSON("./../../servidor/consultes/Assistencies.php", {
            "Classe": document.getElementById("Classes").value,

            "data": data,
            "Tipus_Assistencia": incidencia,
            "_Numero": numalu
        }, procesa_taula);
    }

    incidecies.style.display = 'none';
}

function conf_inicidencia(e, numalup, datap) {
    if (data !== undefined) {
        incidecies.style.display = 'inline';
        incidecies.style.top = e.clientY + 20 + "px";
        incidecies.style.left = e.clientX + "px";
        data = datap;
        numalu = numalup;
    }

}
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        incidecies.style.display = 'none';
    }
});
function procesa_data() {
    if (document.getElementById("data-final").value !== "" && document.getElementById("data-inici").value !== "") {
        $.getJSON("./../../servidor/consultes/Assistencies.php", {
            "Classe": document.getElementById("Classes").value,
            "extreure": true,
            "Data_final": document.getElementById("data-final").value,
            "Data_inicial": document.getElementById("data-inici").value
        }, procesa_taula);
    } else {
        alert("CAL POSAR UNA DATA PER FILTRAR, SIUSPLAU");
    }
}
}catch (err){
    alert(err.message)
}