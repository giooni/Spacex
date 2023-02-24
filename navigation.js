const ul = document.getElementById("navigation");



const lst = ["SpaceX"];

function createnav(ls){
    for(let i=0; i<ls.length; i++){
        let li = document.createElement("li");
        let txt = document.createTextNode(ls[i]);
        li.appendChild(txt);
        idname = "space"
        li.setAttribute("id", idname)
        ul.appendChild(li)
        }

}4
createnav(lst)



