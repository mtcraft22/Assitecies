import { crud } from "../CRUD/crud.js";

parent=document.getElementById("par")
let classe=new crud("./../servidor/consultes/gestioalumnes.php",parent)

classe.envia({"classe":'i3a',"extreure":true},"getjson")