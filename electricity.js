function Electricity() {
    let localStoreUnitsAvailableVal = localStorage.getItem('unitsAvailable');
    let localStoreUnitsBoughtVal = localStorage.getItem('unitsBought');
    let localStoreAmountSpentVal = localStorage.getItem('amountSpent');
    let localStoreAdvanceTakenVal = localStorage.getItem('advanceTaken');

    var unitsAvailable = Number(localStoreUnitsAvailableVal) || 0;
    var unitsBought = Number(localStoreUnitsBoughtVal) || 0;
    var amountSpent = Number(localStoreAmountSpentVal) || 0;
    var advance = localStoreAdvanceTakenVal || false;
    var advanceAmount = Number(localStorage.getItem('advanceAmount')) || 0;
    //console.log(advanceAmount);
    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {
       
        switch(amount){
            case 10:
                
                /*if(advanceAmount > 0 && amount < advanceAmount) {
                    advanceAmount -= amount;
                }
                else if((advanceAmount > 0 && amount > advanceAmount)) {
                    amount -= advanceAmount;*/
                    unitsBought += 7;
                    unitsAvailable += 7;
                    amountSpent += Number(amount);
                //}
                
                break;
            case 20:
                /*if(advanceAmount > 0 && amount < advanceAmount) {
                    advanceAmount -= amount;
                }
                else if((advanceAmount > 0 && amount > advanceAmount)) {
                    amount -= advanceAmount;*/
                    unitsBought += 14;
                    unitsAvailable += 14;
                    amountSpent += Number(amount);
                //}
                break;
            case 50:
                /*if(advanceAmount > 0 && amount < advanceAmount) {
                    advanceAmount -= amount;
                }
                else if((advanceAmount > 0 && amount > advanceAmount)) {
                    amount -= advanceAmount;*/
                    unitsBought += 35;
                    unitsAvailable += 35;
                    amountSpent += Number(amount);
                //}
                break;
            case "advance":
                advanceTaken();
                break;
        }
    }

    function getUnitsAvailable() {
        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if(appliance in appliances){
            if(Number(unitsAvailable) >= Number(appliances[appliance])) {
                unitsAvailable -= Number(appliances[appliance]);
                
                return true;
            }
            else{
                return false;
            }
        }
        
        
    }

    function advanceTaken() {
        //console.log(advance);
        //console.log(advanceAmount);
        if(advance === false){
            advance = true;
            
            unitsBought += 21;
            unitsAvailable += 21;
            advanceAmount +=  30; 
        }
        else if(advance === true && advanceAmount > 0){
             advance = true;
        }
        else if(advance === true && advanceAmount == 0){
            advance = false;            
        }

        return advance;
    }

    function totalAmountSpent() {
        //localStorage["amountSpent"] = amountSpent;
        /*if(advanceAmount > 0){
            amount
        }*/
        return amountSpent;
    }

    function totalUnitsBought(){
        return unitsBought;
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}