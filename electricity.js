function Electricity() {
    let localStoreUnitsAvailableVal = localStorage.getItem('unitsAvailable');
    let localStoreUnitsBoughtVal = localStorage.getItem('unitsBought');
    let localStoreAmountSpentVal = localStorage.getItem('amountSpent');
    let localStoreAdvanceTakenVal = localStorage.getItem('advanceTaken');

    var unitsAvailable = localStoreUnitsAvailableVal || 0;
    var unitsBought = localStoreUnitsBoughtVal || 0;
    var amountSpent = localStoreAmountSpentVal || 0;
    var advance = localStoreAdvanceTakenVal || false;


    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {
        //console.log(typeof amount);
        switch(amount){
            case 10:
                unitsBought += 7;
                unitsAvailable += 7;
                amountSpent += amount;
                break;
            case 20:
                //console.log(amount);
                unitsBought += 14;
                unitsAvailable += 14;
                amountSpent += amount;
                break;
            case 50:
                unitsBought += 35;
                unitsAvailable += 35;
                amountSpent += amount;
                break;
            case "advance":
                advanceTaken();
                break;
        }
        //write updated values to localStorage
        localStorage['unitsAvailable'] = Number(unitsAvailable);
        localStorage['unitsBought'] = Number(unitsBought);
        localStorage['amountSpent'] = Number(amountSpent);
        localStorage['advanceTaken'] = advance;

    }

    function getUnitsAvailable() {
        localStorage['unitsAvailable'] = unitsAvailable;

        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if(appliance in appliances){
            //console.log("appliance in object");
            //console.log(unitsAvailable);
            if(unitsAvailable >= appliances[appliance]) {
                //console.log("condition true");
                unitsAvailable -= appliances[appliance];
                //console.log(unitsAvailable);
                return true;
            }
            else{
                return false;
            }
            // console.log(appliances[appliance]);
            // if (appliance === appliances[i]){
            //     console.log(true);
            // }
            // else{
            //     console.log(false)
            // }
        }
        
        
    }

    function advanceTaken() {
        if(advance === false){
            advance = true;
            localStorage['advanceTaken'] = advance;
            unitsBought += 21;
            unitsAvailable += 21;
            
            return true;
        }
        else if(advance === true){
            amountSpent +=  30;

            advance = false;
            localStorage['advanceTaken'] = advance;
            return false;
        }
    }

    function totalAmountSpent() {
        localStorage['amountSpent'] = amountSpent;
        return amountSpent;
    }

    function totalUnitsBought(){
        localStorage['unitsBought'] = unitsBought;
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