let incidecies=document.getElementById("opcions")
incidecies.style.display='none'
incidecies.style.position="relative"
incidecies.style.top=0
incidecies.style.left=0


document.addEventListener("click",function(e){
    incidecies.style.display='inline'
    incidecies.style.top=e.clientY
    incidecies.style.left=e.clientX


})