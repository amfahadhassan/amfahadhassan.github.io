var rudyTimer = (function () {
    "use strict";
    let timer = null;
    let rudy = function () {
        document.getElementById("output").innerText += "Rudy!";
    };
    function delayMsg2() {
        if (timer == null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
    return {
        timerPlay: function () {
            delayMsg2();
        },
    };
})();

var accounInfoList = [];
var createAccount = (function () {
    function showListAccount() {
        let resultStr = "";
        for (var i = 0; i < accounInfoList.length; i++) {
            resultStr += "Account Name: " + accounInfoList[i].accName;
            resultStr += ", Deposit: " + accounInfoList[i].deposit;
            resultStr += "\n";
        }
        document.getElementById("accountList").value = resultStr;
    }
    return {
        openAccount: function () {
            let acc = new Account(document.getElementById("accountName").value, document.getElementById("deposit").value);
            accounInfoList.push(acc);
            showListAccount();
        },
    };
})();

class Account {
    constructor(accName, deposit) {
        this.accName = accName;
        this.deposit = deposit;
    }
}