document.getElementById('loan-form').addEventListener('submit', calculateres);
//räkna
function calculateres(e) {
    const amount = document.querySelector('#amount');
    const intrest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totintrest = document.querySelector('#total-interest');

    const amValue = parseFloat(amount.value);
    const calcIntrest = parseFloat(intrest.value) / 100 / 12;
    const calcPayment = parseFloat(years.value) * 12;

    // räkna månad betalning
    const z = Math.pow(1 + calcIntrest, calcPayment);
    const monthly = (amValue * z * calcIntrest) / (z - 1);
    if (isFinite(monthly)) {
        monthPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcPayment).toFixed(2)
        totintrest.value = ((monthly * calcPayment) - amValue).toFixed(2);

    } else {
        displayError('något gick fel');
    }

    e.preventDefault();
}

function displayError(error) {

    errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    const heading = document.querySelector('.heading');
    const card = document.querySelector('.card');
    card.insertBefore(errorDiv, heading);
    setTimeout(() => {
        errorDiv.remove()
    }, 2000);

}