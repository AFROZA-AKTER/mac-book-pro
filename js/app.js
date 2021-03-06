function yourCost(accessorie , price){
    const accessorieCostInput = document.getElementById(accessorie + '-cost')
    accessorieCostInput.innerText = price ;
   calculateTotal();
    
}

function getInputValue(accessorie){
    const accessorieInput = document.getElementById(accessorie + '-cost')
    const accessorieCostText = accessorieInput.innerText;
    const accessorieCost = Number(accessorieCostText);
    return accessorieCost;
}

function calculateTotal(){
    const memoryPrice = getInputValue('memory')
    const storagePrice = getInputValue('storage')
    const deliveryCharge = getInputValue('delivery')
    const bestCost = getInputValue('best')
    const totalPrice = bestCost + memoryPrice + storagePrice + deliveryCharge;
    document.getElementById('total').innerText = totalPrice;
    return totalPrice;
    
}
//  calculate memory cost
document.getElementById('8GB-memory').addEventListener('click' , function(){
    yourCost('memory' , 0 );
})
document.getElementById('16GB-memory').addEventListener('click' , function(){
    yourCost('memory' , 180 );
})

// calculate storage cost
document.getElementById('storage256GB').addEventListener('click' , function(){
    yourCost('storage' , 0 );
})
document.getElementById('storage512GB').addEventListener('click' , function(){
    yourCost('storage' , 100 );
})
document.getElementById('storage1TB').addEventListener('click' , function(){
    yourCost('storage' , 180 );
})

// calculate delivery cost
document.getElementById('freeDelivery').addEventListener('click' , function(){
    yourCost('delivery' , 0 );
})
document.getElementById('expressDelivery').addEventListener('click' , function(){
    yourCost('delivery' , 20 );
})

// add pomo code
function quoponCode(){
   
    const pomoCodeField = document.getElementById('pomoCode');
    const pomoCode = pomoCodeField.value;
    if (pomoCode == 'stevekaku') {
        const totalPrice = calculateTotal();
        const discount = (totalPrice * 20) / 100;
        document.getElementById('totalCost').innerText = totalPrice - discount;
    }
    else {
        alert("Wrong promo-code");
    }
    pomoCodeField.value = '';
}
  document.getElementById('apply').addEventListener('click' , function(){
    quoponCode();
 });


