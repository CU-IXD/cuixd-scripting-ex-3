$(document).ready(function(){
    console.log('jQuery is ready to rock.');
    doSomeMath();
});
function doSomeMath() {
    var itemCost = 4.5;
    var numItems = 3;
    var itemsTotal = itemCost * numItems;
    console.log(itemsTotal);
    var taxPercentage = 0.06;
    var taxOnItems = itemsTotal * taxPercentage;
    console.log(taxOnItems);
    var totalCost = itemsTotal + taxOnItems;
    console.log(totalCost);
}