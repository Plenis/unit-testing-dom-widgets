var callsTotalElemThree = document.querySelector(".callTotalSettings");
var smsTotalElemThree = document.querySelector(".smsTotalSettings");
var totalCostElemThree = document.querySelector(".totalSettings");
var callCost = document.querySelector(".callCostSetting");
var smsCost = document.querySelector(".smsCostSetting");
var settingBillAddBtn = document.querySelector(".settingBillAddBtn");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettingsBtn = document.querySelector(".updateSettings");
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

var settingType = document.querySelector(".billItemTypeWithSettings");

var elem = document.querySelector("input[name='billItemTypeWithSettings']:checked");

settingBillAddBtn.addEventListener('click', addSettingBtn); {


    if (totalCostS >= warningLevel) {
        totalCostElemThree.classList.add("warning");
        totalCostElemThree.classList.remove("danger");

    }

    if (totalCostS >= criticalLevel) {
        totalCostElemThree.classList.add("danger");
        totalCostElemThree.classList.remove("warning");
        settingBillAddBtn.disabled = true;

    }

    if (totalCostS < warningLevel) {
        totalCostElemThree.classList.remove("warning");
        totalCostElemThree.classList.remove("danger");

    }
}

updateSettingsBtn.addEventListener('click', updateSettingsTotalbill); {

    if (totalCostS >= criticalLevel) {
        totalCostElemThree.classList.add("danger");
        totalCostElemThree.classList.remove("warning");
        settingBillAddBtn.disabled = false;

    }
    if (totalCostS >= warningLevel) {
        totalCostElemThree.classList.add("warning");
        totalCostElemThree.classList.remove("danger");
        settingBillAddBtn.disabled = false;
    }

    if (totalCostS < warningLevel) {
        totalCostElemThree.classList.remove("warning");
        totalCostElemThree.classList.remove("danger");
        settingBillAddBtn.disabled = false;
    }
}

settingBillAddBtn.addEventListener('click', addSettingBtn)
updateSettingsBtn.addEventListener('click', updateSettingsTotalbill);