// DOM element(s) references
let topUpRadioElem = document.getElementsByName("buyElectricity");
let btnBuyElem = document.querySelector(".topupNow");
let unitsAvailableElem = document.querySelector(".unitsAvailable");
let totalUnitsBoughtElem = document.querySelector(".totalUnits");
let totalAmountSpentElem = document.querySelector(".totalAmount");
let advanceTakenElem = document.querySelector(".advanceTaken");
let appliancesRadioElem = document.getElementsByName("useElectricity");
let btnUseElem = document.querySelector(".useNow");

let localStoreUnitsAvailableVal;
let localStoreUnitsBoughtVal;
let localStoreAmountSpentVal;

// add event listener for when the 'Buy' button is clicked
btnBuyElem.addEventListener("click", btnBuy_onClick);

// add event listener for when the 'Use' button is clicked
btnUseElem.addEventListener("click", btnUse_onClick);

//check if a value for the unitsAvailable is stored in localStorage
if (localStorage['unitsAvailable']){
    // ensure counter is a number and set it to the innerHTML
    localStoreUnitsAvailableVal = Number(localStorage.getItem('unitsAvailable'));
    unitsAvailableElem.innerHTML = Number(localStorage.getItem('unitsAvailable')).toFixed(2);
    
};

//check if a value for the unitsBought is stored in localStorage
if (localStorage['unitsBought']){
    // ensure counter is a number and set it to the innerHTML
    totalUnitsBoughtElem.innerHTML = Number(localStorage['unitsBought']).toFixed(2);
    localStoreUnitsBoughtVal = Number(localStorage.getItem('unitsBought'));
};

//check if a value for the amountSpent is stored in localStorage
if (localStorage['amountSpent']){
    // ensure counter is a number and set it to the innerHTML
    totalAmountSpentElem.innerHTML = Number(localStorage['amountSpent']).toFixed(2);
    localStoreAmountSpentVal = Number(localStorage.getItem('amountSpent'));
};

//check if a value for the advanceTaken is stored in localStorage
if (localStorage['advanceTaken']){
    // ensure counter is a number and set it to the innerHTML
    advanceTakenElem.innerHTML = Number(localStorage['advanceTaken']).toFixed(2);
    
};

// Factory Function instance 
const electricity =  Electricity();

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
    
    // sets the values for the totals
    unitsAvailableElem.innerHTML = electricity.getUnitsAvailable().toFixed(2);
    totalUnitsBoughtElem.innerHTML = electricity.totalUnitsBought().toFixed(2);
    totalAmountSpentElem.innerHTML = electricity.totalAmountSpent().toFixed(2);        

    // update localStorage values
    localStorage['amountSpent'] = Number(electricity.totalAmountSpent().toFixed(2));
    localStorage['unitsAvailable'] = Number(electricity.getUnitsAvailable().toFixed(2));
    localStorage['unitsBought'] = Number(electricity.totalUnitsBought().toFixed(2));
                
}

function btnUse_onClick() {
    var applianceSelected = "";
    
    // Loop through the radio buttons
    for (var i = 0; i < appliancesRadioElem.length; i++) {
        if (appliancesRadioElem[i].checked) {
          // Get the value of the selected radio button
          applianceSelected = electricity.titleCase(appliancesRadioElem[i].value);
          // use the appliance selected
          electricity.useAppliance(applianceSelected);
          break; // Exit the loop once the selected radio button is found
        }
    }
    // updates the units available
    unitsAvailableElem.innerHTML = electricity.getUnitsAvailable().toFixed(2);
    localStorage['unitsAvailable'] = Number(electricity.getUnitsAvailable().toFixed(2));

    

}