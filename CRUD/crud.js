
export class crud{
    
    
    constructor(php){
        this.php=php
        this.tr=null
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
        $("body").append("<table id='alumnes'></table>")
        this.tr=document.createElement("tr")
        $(alumnes).append(this.tr)
        Object.keys(data[0]).forEach(key=>{
            $(this.tr).append("<td>"+key+"</tr>")
            
        })
        data.forEach(element => {
            
            this.tr=document.createElement("tr")
            $(alumnes).append(this.tr)
            Object.keys(element).forEach(key=>{
                $(this.tr).append("<td>"+element[key]+"</tr>")
            })           
        });
        
    }
}


