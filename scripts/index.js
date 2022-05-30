// Add the coffee to local storage with key "coffee"

var bucketdata =JSON.parse(localStorage.getItem("coffee"))|| [];

console.log("aman")
let url = "https://masai-mock-api.herokuapp.com/coffee/menu";

async function takedata(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.menu.data)
         displaydata(data.menu.data)
    }catch(err){
        console.log(err)
    }
}
takedata();
var container = document.querySelector("#menu");
function displaydata(data){


    var count = bucketdata.length;
    var c =document.querySelector("#coffee_count");
    c.innerText = count;


     data.forEach(function(elem){
       let div  = document.createElement("div"); 
       let img = document.createElement("img");
       img.setAttribute("src",elem.image);
       let type = document.createElement("h3");
     type .innerText = elem.title;
      let price = document.createElement("h3");
      price.innerHTML = elem.price;
      let addtobucket = document.createElement("button");
      addtobucket.innerText = "Add to Bucket";
           addtobucket.setAttribute("id","add_to_bucket")
            addtobucket.addEventListener("click",function(){
                  bucket(elem)
         })
      div.append(img,type,price,addtobucket);
      container.append(div);
     })

 
     function bucket(elem){
         bucketdata.push(elem)
         localStorage.setItem("coffee",JSON.stringify(bucketdata));
        displaydata(bucketdata)

     }

}