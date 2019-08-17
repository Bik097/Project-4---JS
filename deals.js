var jsonObj=[];

function init(){
    fetch("https://api.jsonbin.io/b/5d5702f9883f962c9b433352")
      .then(data => data.json())
      .then(data => {
        for(let i=0; i<data.length;i++){
        jsonObj.push(data[i]);
        }
        render(jsonObj);
      });
}

function render(jsonObj){
let products = document.querySelectorAll('.product');
let price = document.querySelectorAll('.price');
let desc = document.querySelectorAll('.desc');

for(let k=0; k<products.length;k++){
let image = document.createElement("img"); 
let description = document.createElement("p"); 
let pricing = document.createElement("p"); 

image.src = jsonObj[k].link;
description.innerHTML = jsonObj[k].desc;
pricing.innerHTML = jsonObj[k].price;

products[k].appendChild(image);
price[k].appendChild(pricing);
desc[k].appendChild(description);

}
}

init();
