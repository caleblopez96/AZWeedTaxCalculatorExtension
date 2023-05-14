document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('input');
    const med = document.querySelector('#medicalTaxTotal');
    const rec = document.querySelector('#recreationalTaxTotal');
    const calcButton = document.querySelector('.calculate');
    const clearButton = document.querySelector('.clear');

    const subTotalMappings = [
        { website: 'dispensary 1.com', identifiers: ['.subtotal', '#orderTotal']},
        { website: 'dispensary 1.com', identifiers: ['.subtotal', '#orderTotal']},
        { website: 'dispensary 1.com', identifiers: ['.subtotal', '#orderTotal']},
        { website: 'dispensary 1.com', identifiers: ['.subtotal', '#orderTotal']},
        { website: 'dispensary 1.com', identifiers: ['.subtotal', '#orderTotal']}
    ]

    calcButton.addEventListener('click', calculateTotal);

    clearButton.addEventListener('click', clearTotal);

    input.addEventListener('keydown', function(event) {
        event.key === "Enter" ? calculateTotal() : null
    });

    function clearTotal() {
        input.value = '';
        med.textContent = 'Med:'
        rec.textContent = 'Rec:'
    }

    function calculateTotal() {
        let subtotal = parseFloat(input.value);
        if (isNaN(subtotal) || subtotal <= 0) {
        return null;
    }
    // these calculations for the taxes are wrong. I think its 8 and 16 to equal 24
    let medicalTax = subtotal * 0.083;
    let recreationalTax = subtotal * 0.243;
    let totalMed = subtotal + medicalTax;
    let totalRec = subtotal + recreationalTax;

    med.textContent = 'Med: $' + totalMed.toFixed(2);
    rec.textContent = 'Rec: $' + totalRec.toFixed(2);
    }
});