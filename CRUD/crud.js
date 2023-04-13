
export class crud{
    php=null
    Table=document.createElement("table")

    Parent_node=null
    crud(php,Parent_node){
        this.php=php
        this.Parent_node=Parent_node
        
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
            $(this.Table).append("<tr><th>"+data+" :"+"</th><th>"+data[key]+"</th></tr>")
        })
        this.Parent_node.append(this.Table)
    }
}


