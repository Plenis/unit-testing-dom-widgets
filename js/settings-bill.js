function updateSettingsTotalbill(){

    function addSettingBtn(){
        callCostThree = Number(callCost.value);
        smsCostThree = Number(smsCost.value);
        warningLevel = Number(warningLevelSetting.value);
        criticalLevel = Number(criticalLevelSetting.value);

           if (elem.checked == true) {
               if (elem.value === "call") {
                   callsTotalS += Number(callCostThree)
               } else if (elem.value === "sms") {
                   smsTotals += Number(smsCostThree)
               }
           
      
       callsTotalElemThree.innerHTML = callsTotalS.toFixed(2);
       smsTotalElemThree.innerHTML = smsTotals.toFixed(2);
       totalCostS = callsTotalS + smsTotals;
        totalCostElemThree.innerHTML = totalCostS.toFixed(2);
       }
       return addSettingBtn(totalCostS.toFixed(2))
    }
       
       function updateSettingsTotalbill(){
        callCostThree = Number(callCost.value);
        smsCostThree = Number(smsCost.value);
        warningLevel = Number(warningLevelSetting.value);
        criticalLevel = Number(criticalLevelSetting.value);
    
    
       }
}