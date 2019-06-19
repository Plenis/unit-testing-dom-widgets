function calculateBtnClicked() {
    var billTotal = 0;

    function billString(billType) {
        billTotal = 0;
        var billItems = billType.split(",");
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }
        }
        return billTotal.toFixed(2);
    }



    function warningLevel(total) {
        return total >= 20 && total < 30;
    }

    function criticalLevel(total) {
        return total >= 30;
    }

    return {
        logic: billString,
        warningLevel,
        criticalLevel,
        
    }

}   