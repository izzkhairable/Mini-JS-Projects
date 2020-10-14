/*
    Name: Mohamed Izzat Khair Bin Mohamed Noor
    Email: mohamedik.2019
*/

// DO NOT MODIFY THIS VARIABLE
const shopList = [
    { "item": "bread", "price": 1.60 },
    { "item": "milk", "price": 2.95 },
    { "item": "butter", "price": 3.50 },
    { "item": "vegetable", "price": 5.80 },
    { "item": "coffee", "price": 3.60 },
    { "item": "tea", "price": 6.50 },
    { "item": "apple", "price": 0.85 }
];

var addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click', function(event){addItem(event)})

// YOUR CODE GOES HERE
function addItem(event){
    event.preventDefault();

    var groceryinp=document.getElementById('groceryinput').value;
    var groceryel=document.getElementById('groceryinput')
    groceryel.value=''

    if(groceryinp=='' || groceryinp==null){
        groceryel.setAttribute('placeholder','Aiyo! Enter Item Name!');
        return
    }

    var result=shopList.find(element => element.item==groceryinp.toLowerCase());
    if(result==null){
        groceryel.setAttribute('placeholder','Sorry! Don\'t have it!');
        return
    }
    
    groceryel.setAttribute('placeholder','Enter Item Name');
    var list = document.getElementById("checklist");
    if(list==null){
        var node= document.createElement('ul');
        node.setAttribute('id','checklist');
        document.getElementById('firstCard').appendChild(node);
    }

    var str= `
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" value="${groceryinp}" id="${groceryinp}">
        <label class="form-check-label" for="${groceryinp}">
            ${groceryinp}
        </label>
    </div>`

    var listItem=document.createElement('li')
    listItem.innerHTML=str
    document.getElementById('checklist').appendChild(listItem)

}


function processItem(){

    var alert = document.getElementsByClassName("alert")[0];
    if(alert!=null){
        alert.remove();
    }

    var items=document.getElementsByClassName('form-check-input');
    var str=``
    var totalPrice=0;
    var countNoCheck=0;
    for(item of items){
        if(item.checked==true){
            var itemdetail = shopList.find(element => element.item==item.value.toLowerCase());
            var price=itemdetail.price
            str+=`${item.value.toLowerCase()} - $${price.toFixed(2)}<br>`
            totalPrice+=price
        }else{
            countNoCheck+=1
        }
    }

    if(countNoCheck==items.length){
        var alert=`
        <div class="alert alert-danger">
            You need to select items for calculation!
        </div>`

        document.getElementById('maindiv').innerHTML+=alert;
        document.getElementById('resultCalc').innerHTML=``
        return false
    }
    
    str+=`<br><br>The total cost is : $${totalPrice.toFixed(2)}`
    document.getElementById('resultCalc').style.display="block"
    document.getElementById('resultCalc').innerHTML=str;
    return false
}