document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateTip);

    function calculateTip() {
        const billAmount = parseFloat(document.getElementById("billAmount").value);
        const serviceQuality = parseFloat(document.getElementById("serviceQuality").value);
        const numOfPeople = parseInt(document.getElementById("numOfPeople").value);

        if (isNaN(billAmount) || isNaN(numOfPeople)) {
            alert("Please enter valid values.");
            return;
        }

        const tipAmount = (billAmount * serviceQuality) / numOfPeople;
        const formattedTipAmount = tipAmount.toFixed(2);

        document.getElementById("tipAmount").innerHTML = `Tip Amount: Rs ${formattedTipAmount} per person`;
    }
});
