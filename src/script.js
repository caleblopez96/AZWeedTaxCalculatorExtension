const input = document.querySelector('input');
const med = document.querySelector('#medicalTaxTotal');
const rec = document.querySelector('#recreationalTaxTotal');
const button = document.querySelector('button');

button.addEventListener('click', calculateTotal);

input.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        calculateTotal();
    }
});

function calculateTotal() {
    let subtotal = parseFloat(input.value);
    if (isNaN(subtotal)) {
    alert('Please enter a real number.');
    return;
}

    let medicalTax = subtotal * 0.083;
    let recreationalTax = subtotal * 0.243;
    let totalMed = subtotal + medicalTax;
    let totalRec = subtotal + recreationalTax;

    med.textContent = 'med: $' + totalMed.toFixed(2);
    rec.textContent = 'rec: $' + totalRec.toFixed(2);
}