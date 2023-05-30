// DOM element(s) references
let topUpRadioElem = document.getElementsByName("buyElectricity");
let btnBuyElem = document.querySelector(".topupNow");
let unitsAvailableElem = document.querySelector(".unitsAvailable");
let totalUnitsBoughtElem = document.querySelector(".totalUnits");
let totalAmountSpentElem = document.querySelector(".totalAmount");
let advanceTakenElem = document.querySelector(".advanceTaken");
let appliancesRadioElem = document.getElementsByName("useElectricity");
let btnUseElem = document.querySelector(".useNow");


// Factory Function instance 
const electricity =  Electricity();

// add event listener for when the 'Buy' button is clicked
btnBuyElem.addEventListener("click", btnBuy_onClick);

// add event listener for when the 'Use' button is clicked
btnUseElem.addEventListener("click", btnUse_onClick);

//check if a value for the unitsAvailable is stored in localStorage
if (localStorage['unitsAvailable']){
    // ensure counter is a number and set it to the innerHTML
    unitsAvailableElem.innerHTML = Number(localStorage['unitsAvailable']);
};

//check if a value for the unitsBought is stored in localStorage
if (localStorage['unitsBought']){
    // ensure counter is a number and set it to the innerHTML
    totalUnitsBoughtElem.innerHTML = Number(localStorage['unitsBought']);
};

//check if a value for the amountSpent is stored in localStorage
if (localStorage['amountSpent']){
    // ensure counter is a number and set it to the innerHTML
    totalAmountSpentElem.innerHTML = Number(localStorage['amountSpent']);
};

//check if a value for the advanceTaken is stored in localStorage
if (localStorage['advanceTaken']){
    // ensure counter is a number and set it to the innerHTML
    advanceTakenElem.innerHTML = Number(localStorage['advanceTaken']);
};

// DOM events here
function btnBuy_onClick() {
    var topUpAmountSelected = "";
    
    // Loop through the radio buttons
    for (var i = 0; i < topUpRadioElem.length; i++) {
        if (topUpRadioElem[i].checked) {
          // Get the value of the selected radio button
          topUpAmountSelected = Number(topUpRadioElem[i].value);
          electricity.topUpElectricity(topUpAmountSelected);
          break; // Exit the loop once the selected radio button is found
        }
    }
    
    
    if(localStorage.length > 0 ){
        unitsAvailableElem.innerHTML = Number(localStorage['unitsAvailable']).toFixed(2);
        totalUnitsBoughtElem.innerHTML = Number(localStorage['unitsBought']).toFixed(2);
        totalAmountSpentElem.innerHTML = Number(localStorage['amountSpent']).toFixed(2);
        //advanceTakenElem.innerHTML = Number(localStorage['advanceTaken']);
        if(Number(localStorage['advanceTaken']) === true) {
            advanceTakenElem.classList.replace('hidden','visible');
        }
        else {
            advanceTakenElem.classList.replace('visible','hidden');
        };
    }
    else {
        unitsAvailableElem.innerHTML = electricity.getUnitsAvailable().toFixed(2);
        totalUnitsBoughtElem.innerHTML = electricity.totalUnitsBought().toFixed(2);
        totalAmountSpentElem.innerHTML = electricity.totalAmountSpent().toFixed(2);
        if(electricity.advanceTakenElem() === true) {
            advanceTakenElem.classList.replace('hidden','visible');
        }
        else {
            advanceTakenElem.classList.replace('visible','hidden');
        };
    }
        

}

function btnUse_onClick() {

}