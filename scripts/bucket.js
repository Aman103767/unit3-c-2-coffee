// On clicking remove button the item should be removed from DOM as well as localstorage.
var bucketdata =JSON.parse(localStorage.getItem("coffee"))|| [];

displaydata(bucketdata);


function displaydata(data){
    document.querySelector("#bucket").innerHTML = "";
    var total = 0;
     data.forEach(function(elem,index){
       let div  = document.createElement("div"); 
       let img = document.createElement("img");
       img.setAttribute("src",elem.image);
       let type = document.createElement("h3");
     type .innerText = elem.title;
      let price = document.createElement("h3");
      price.innerHTML = elem.price;
      total = total+elem.price;
      var t = document.querySelector("#total_amount")
        t.innerText = total;
      let retobucket = document.createElement("button");
      retobucket.innerText = "Remove";
        retobucket.setAttribute("id","remove_coffee")
            retobucket.addEventListener("click",function(){
                  remove(elem,index)
         })
      div.append(img,type,price,retobucket);
     document.querySelector("#bucket").append(div);
     })

 
     function remove(elem,index){
         bucketdata.splice(index,1);
         localStorage.setItem("coffee",JSON.stringify(bucketdata));
         displaydata(bucketdata);

     }

}