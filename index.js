var prices = new Array();
prices["Tequilla"]=7;
prices["Vodka"]=6;
prices["CoorsLight"]=2;
prices["BudLight"]=3;

console.log(prices);

function getTotal()
{
   
    var cartPrice = document.getElementById("alcoholDropDown").value;
 
    document.getElementById("demo").innerHTML =
                                      "Total Price For alcohol $"+cartPrice;
 
}
