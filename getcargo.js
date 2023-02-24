const box = document.getElementById("boxnum");
const res  = document.getElementById("res");
const ownmail = document.getElementById("mail")
const name = document.getElementById("name");
const search = document.getElementById("search")
const cont = document.getElementById("conteiner");
const list = document.getElementById("list")
const markets = document.getElementById("markets")
const clear = document.getElementById("x")
const burger = document.getElementById("bar")
  
 class object {
    constructor(id, name, boxes, email) {
      this.id = id;
      this.name = name;
      this.boxes = boxes;
      this.email = email;
    }
    getcargo() {
      
      if(!this.boxes){
        return 0

      
      }else{
        var lst = this.boxes.split(",");
        var cargo =0
        for(let i=0; i<lst.length; i++){
          cargo += (+lst[i])

        }
      }
      return Math.ceil(cargo/10)
      

      
     
          
        
      }
      
      
    
  
    


    
  }

fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json")
.then(res => res.json())
.then(data =>{
  for(let i=0; i<data.length; i++){
    const li = document.createElement("li");
    const nm = data[i].name;
    li.innerHTML = nm;
    
    li.setAttribute("id",nm )
    list.appendChild(li)
    li.addEventListener("click", ()=>{
      if(window.innerWidth<600){
        markets.style.display ="none";
        search.style.display ="block"
        clear.style.display ="none";
        burger.style.display="block"
      }
    cont.style.display = "block"
    
    newobj = new object(data[i].id, data[i].name, data[i].boxes, data[i].email,)
    
    name.innerHTML = newobj.name;
    box.innerHTML = newobj.boxes;
    ownmail.innerHTML = newobj.email;
    res.innerHTML = newobj.getcargo();
   


    })
   
      
     

  }
  
  
})
fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json")
  .then(res => res.json())
  .then(data => {
    search.addEventListener("input", function getValue() {
      cont.style.display = "none";
      const val = search.value.toLowerCase();
      
      for (let i = 0; i < data.length; i++) {
        const per = data[i].name.toLowerCase();
        if (val === per) {
          const newObj = new object(data[i].id, data[i].name, data[i].boxes, data[i].email)
          name.innerHTML = newObj.name;
          box.innerHTML = newObj.boxes;
          ownmail.innerHTML = newObj.email;
          res.innerHTML = newObj.getcargo();
          cont.style.display = "block";
          
        }
      }
    });
  });
