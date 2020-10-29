// Total quantity of products
var totalQuantity = 0;
// Total cost of the cart
var total = 0;
// Index
var i = 1;
// List of the cost of every product in the cart
var itemCost = [];
// List of the amount of every product in the cart
var itemQuantity = [];
// List of the amount of every product in stock
//var itemStock = [];


// Function to add products to the cart
function add(n) {
    // Add quantity of products to basket/cart icon
    quantityId = "qty" + n;
    quantity = document.getElementById(quantityId).value;
    totalQuantity += Number(quantity);
    document.getElementById("totalQuantity").innerHTML = totalQuantity.toFixed(0);

    // Getting the others Id's needed to make the list
    productId = "product" + n;
    product = document.getElementById(productId).innerHTML;
    priceId = "price" + n;
    price = document.getElementById(priceId).innerHTML;
    imgId = "img" + n;
    url = document.getElementById(imgId).src



    // Creating a li element to add it to ul 
    var node = document.createElement("LI");
    // Creating an img element to add it to li 
    var img = document.createElement("img");
    // id of li element
    item = "item" + i;
    node.setAttribute("id", item)
    // id of img element
    img.setAttribute("id", item)
    // cost of each product selected
    itemCost[i - 1] = Number(price) * Number(quantity);
    // Quantity of each product selected
    itemQuantity[i - 1] = Number(quantity);
    // Updating the index i 
    i += 1;
    // text of the li element
    var textnode = document.createTextNode("   " + product + "   " + quantity + "  x  " + "R$" + price + "    ");
    // add the image to li element
    img.src = url;
    img.width = 20;
    img.height = 20;
    console.log(url)
    node.appendChild(img);
    // add the text to li element            
    node.appendChild(textnode);

    // add li element to ul list
    document.getElementById("items").appendChild(node);

    // Calculating and updating the total
    total += Number(price) * Number(quantity);
    document.getElementById("total").innerHTML = "Total: R$" + total.toFixed(2);

    // Add a remove button connected to a delete function
    document.getElementById(item).innerHTML += '<svg type="button" onclick="deleItem(' + "'" + item + "'" + ')" class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg><p></p>';

    // Updating the quantity of each product in stock (not working)
    //stock= Number(stock) - Number(quantity)
    //document.getElementById("stockId").innerHTML = stock.toFixed(0);
    //itemStock[i-1] = Number(stock);

}

// Funcrion to remove a product from the cart
function deleItem(itemId) {
    document.getElementById(itemId).remove();
    // Getting the position
    n = Number(itemId.slice(-1)) - 1;
    // Updating the cost of products in the cart
    total -= itemCost[n];
    document.getElementById("total").innerHTML = "Total: R$" + total.toFixed(2);
    // Updating the amount of products in the cart
    totalQuantity -= itemQuantity[n];
    document.getElementById("totalQuantity").innerHTML = totalQuantity.toFixed(0);
    // Updating the amount of products in stock (not working)
    //stock += itemStock[n];
    //document.getElementById("stockId").innerHTML = stock.toFixed(0);
}