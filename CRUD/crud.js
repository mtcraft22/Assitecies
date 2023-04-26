class crud{
    constructor(php,arrel="body"){
        this.php=php
        this.arrel=arrel
        this.tr=null

    }
    envia(info,method,obj) {
        
        if (method=="get"){
            $.get(this.php,info)
        }else if (method=="post"){
            $.post(this.php,info)
        }else if (method=="getjson"){
            $.getJSON(this.php,info,function(data){obj.renderizar(data,obj)})
            
        }
    }

    renderizar(data,obj){
        if (document.getElementById("alumnes")){$("#alumnes").remove()}
        if(obj){
            $(obj.arrel).append("<table id='alumnes'></table>")
            obj.tr=document.createElement("tr")
            $("#alumnes").append(obj.tr)
            Object.keys(data[0]).forEach(key=>{
                $(obj.tr).append("<td>"+key+"</tr>")
            })
            data.forEach(element => {
                obj.tr=document.createElement("tr")
                $("#alumnes").append(obj.tr)
                Object.keys(element).forEach(key=>{
                    if (element[key]==null){
                        $(obj.tr).append("<td></tr>")
                    }else{
                        $(obj.tr).append("<td>"+element[key]+"</tr>")
                    }
                
                })           
            });
            }
        
        alert("Dades actualizades")
    }
}


