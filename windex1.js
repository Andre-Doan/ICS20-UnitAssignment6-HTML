let pricelarge = document.getElementById("large").value;
let priceexlarge = document.getElementById("exlarge").value;
let pricetop1 = document.getElementById("top1").value;
let pricetop2 = document.getElementById("top2").value;
let pricetop3 = document.getElementById("top3").value;
let pricetop4 = document.getElementById("top4").value;
let pricepizza = 0;
let tax = 0;
let total = 0;
function myFunction(){
//Find the pizza and topping cost
    if ((large.checked==true) && (top1.checked==true)){
        pricepizza = parseFloat(pricelarge) + parseFloat(pricetop1);
    }
else if ((large.checked==true) && (top2.checked==true)){
        pricepizza = parseFloat(pricelarge) + parseFloat(pricetop2);
    }
else if ((large.checked==true) && (top3.checked==true)){
        pricepizza = parseFloat(pricelarge) + parseFloat(pricetop3);
    }
else if ((large.checked==true) && (top4.checked==true)){
        pricepizza = parseFloat(pricelarge) + parseFloat(pricetop4);
    }
else if ((exlarge.checked==true) && (top1.checked==true)){
        pricepizza = parseFloat(priceexlarge) + parseFloat(pricetop1);
    }
else if ((exlarge.checked==true) && (top2.checked==true)){
        pricepizza = parseFloat(priceexlarge) + parseFloat(pricetop2);
    }
else if ((exlarge.checked==true) && (top3.checked==true)){
        pricepizza = parseFloat(priceexlarge) + parseFloat(pricetop3);
    }
else if ((exlarge.checked==true) && (top4.checked==true)){
        pricepizza = parseFloat(priceexlarge) + parseFloat(pricetop4);
    }
 // Count tax and total
    tax = pricepizza * 0.13;
    total = pricepizza + tax;
 // rounded the numbers
    pricepizza = pricepizza.toFixed(2);
    tax = tax.toFixed(2);
    total = total.toFixed(2);
//  print results
    document.getElementById("outputprice").innerHTML = "Your price for the pizza is: " + pricepizza;
    document.getElementById("outputtax").innerHTML = "Tax is: " + tax;
    document.getElementById("outputtotal").innerHTML ="Total for the pizza is: " + total;
}