
export class crud{
    constructor(php,Parent_node){
        this.php=php
        this.Parent_node=Parent_node
        this.Parent_node.setAttribute("id","contingut")
        
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
        
        Object.keys(data).forEach(function(key){
            $("#contingut").append("<tr><th>"+data+" :"+"</th><th>"+data[key]+"</th></tr>")
        })
        document.getElementById("contingut").append(this.Table)
    }
}


