document.querySelector("form").addEventListener("submit",myfunction)
function myfunction(){
    event.preventDefault();
alert("Your order is accepted");
one()



function one(){
    setTimeout(function(){
        alert("Your order is being Prepared")
        two()

    },3000)
}
function two(){
    setTimeout(function(){
        alert("Your order is being packed")
        three()
    },5000)
}

function three(){
setTimeout(function(){
    alert("Your order is out for delivery ")
    four()
},2000)
}
function four(){
setTimeout(function(){
    alert("Order delivered")
},2000)
}
}