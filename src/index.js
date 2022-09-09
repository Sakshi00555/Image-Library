
const API = "GhIRY7Y-EUHX70rEfJ7SmGHczVO-JHslU2xYGoO32-Y";

import navbar from "../component/navbar.js";


let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();

import { searchImg, append } from "./fetch.js";




let search = (event) => {
    if (event.key == "Enter") {
        let query = document.getElementById("query").value;
        let sort = undefined;
        let filter = undefined;
        searchImg(API, query,sort,filter).then((data) => {
            // console.log(data.results);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
        });

    }
};
document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;




function cSearch(){
    
    var sort = undefined;
    var filter = undefined;
    searchImg(API, this.id,sort,filter).then((data) => {
        console.log(data);
        var container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
} 


for(let el of categories){
    el.addEventListener("click", cSearch)
}


document.getElementById("sortImg").addEventListener("change",function(event){
    let sort = event.target.value;
    
    let filter = undefined;
    let query = localStorage.getItem("query");
    searchImg(API, query,sort,filter).then((data) => {
        
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
});


document.getElementById("filter").addEventListener("change",function(event){
    var filter = event.target.value;
  
    var sort = undefined;
    var query = localStorage.getItem("query");
    searchImg(API, query,sort,filter).then((data) => {
        
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
})


