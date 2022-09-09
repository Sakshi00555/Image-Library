let searchImg = async (API, query,sort,filter) => {
    localStorage.setItem("query",query);
    console.log("sort:",sort);
    console.log("filter:",filter);
    let url;
    if(sort == undefined && filter == undefined){
        url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${API}`;
    }else if(sort != undefined && filter == undefined){
        url = `https://api.unsplash.com/search/photos?query=${query}&order_by=${sort}&per_page=28&client_id=${API}`;
    }else if(sort == undefined && filter != undefined){
        url = `https://api.unsplash.com/search/photos?query=${query}&orientation=${filter}&per_page=28&client_id=${API}`;
    }

    
    try {
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data.results);
        return data;
    } catch (err) {
        console.log(err);

    }
}


let append = (data, container) => {
    data.forEach(({ alt_description, urls: { small } }) => {
        
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("class", "image")
        var div1 = document.createElement("div");
        div1.setAttribute("class","name");
        var h4 = document.createElement("h4");

        img.src = small;
        h4.textContent = alt_description;
        div1.append(h4)
        div.append(img,div1);
        container.append(div);
         
    })
   
}



export { searchImg, append };