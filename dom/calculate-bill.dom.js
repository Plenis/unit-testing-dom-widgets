var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringField = document.querySelector(".billString");

var colorInstance = calculateBtnClicked();

// var color = colorInstance.warningLevel();

var totalBill = calculateBtnClicked();


calculateBtn.addEventListener('click', function () {
    var total = totalBill.logic(billStringField.value);
    billTotalElement.innerHTML = total;

    if (colorInstance.criticalLevel(total)) {
        billTotalElement.classList.add('danger');
        billTotalElement.classList.remove("warning");
    }
    else if (colorInstance.warningLevel(total)) {
        billTotalElement.classList.add('warning');
        billTotalElement.classList.remove("danger");

    }
    else {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger");

    }

});

// var roundedBillTotal = billTotalElement;



// billTotalElement.innerHTML = roundedBillTotal;

calculateBtn.addEventListener('click', calculateBtnClicked);