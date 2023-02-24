const bar = document.getElementById("bar");
const x = document.getElementById("x")
const contein = document.getElementById("conteiner");
const mark =document.getElementById("mark")

bar.addEventListener("click", ()=> {
    if(window.innerWidth <600){
        document.getElementById("markets").style.display = "block";
        bar.style.display = "none";
        x.style.display = "block"
        document.getElementById("search").style.display = "none";
        contein.style.display="none"
    }


})

x.addEventListener("click", ()=>{
    if(window.innerWidth < 600){
        document.getElementById("markets").style.display = "none";
        x.style.display = "none";
        bar.style.display = "block"
        document.getElementById("search").style.display = "block"
    }
})



  