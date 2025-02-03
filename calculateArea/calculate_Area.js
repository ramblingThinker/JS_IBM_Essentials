// let length;
// let width;

// function calculateArea() {
//     length = parseFloat(document.getElementById('length').value);
//     width = parseFloat(document.getElementById('width').value);

//     let area = length * width;

//      document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
// }


let itemPrice1;
let itemPrice2;
let itemPrice3;


function calculateGroceryTotal() {
    itemPrice1 = parseFloat(document.getElementById('item1').value);    
    itemPrice2 = parseFloat(document.getElementById('item2').value);  
    itemPrice3 = parseFloat(document.getElementById('item3').value);  

    let total = itemPrice1 + itemPrice2 + itemPrice3;


    document.getElementById('groceryResult').innerText = `The total amount is : $ ${total}`;
}