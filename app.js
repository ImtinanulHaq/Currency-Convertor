// Import countryList from country.js
// If using modules, you can use import. For browser, countryList is global if included via <script>.
/* global countryList */

// DOM elements
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const fromFlag = document.getElementById('from-flag');
const toFlag = document.getElementById('to-flag');
const amountInput = document.getElementById('amount');
const resultBox = document.getElementById('converted-amount');

// Populate select options with country name, currency code, and symbol
function populateSelect(select, defaultCode) {
    select.innerHTML = '';
    countryList.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.name} (${country.code}) ${country.symbol}`;
        option.setAttribute('data-country', country.country);
        select.appendChild(option);
    });
    select.value = defaultCode;
}

// Update flag image based on selected country
function updateFlag(select, flagImg) {
    const selectedOption = select.options[select.selectedIndex];
    const countryCode = selectedOption.getAttribute('data-country');
    flagImg.src = `https://flagsapi.com/${countryCode}/flat/32.png`;
    flagImg.alt = countryCode + " Flag";
}

// Initial population
populateSelect(fromSelect, "USD");
populateSelect(toSelect, "PKR");
updateFlag(fromSelect, fromFlag);
updateFlag(toSelect, toFlag);

// Change flag on select change
fromSelect.addEventListener('change', () => updateFlag(fromSelect, fromFlag));
toSelect.addEventListener('change', () => updateFlag(toSelect, toFlag));

// Conversion logic using the provided API
document.getElementById('convert-btn').addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value.toLowerCase();
    const to = toSelect.value.toLowerCase();

    if (isNaN(amount) || amount <= 0) {
        resultBox.textContent = "Enter a valid amount!";
        return;
    }

    resultBox.textContent = "Converting...";

    try {
        // Fetch rates from the API (EUR base)
        const res = await fetch("https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json");
        const data = await res.json();

        // The API gives rates as: { eur: { usd: 1.08, pkr: 300, ... }, ... }
        // To convert from X to Y: amount_in_eur = amount / rate[X], result = amount_in_eur * rate[Y]
        const rates = data.eur;

        if (!rates[from] || !rates[to]) {
            resultBox.textContent = "Currency not supported!";
            return;
        }

        // Convert from 'from' currency to EUR, then to 'to' currency
        const amountInEur = amount / rates[from];
        const converted = amountInEur * rates[to];

        // Get symbols for display
        const fromObj = countryList.find(c => c.code.toLowerCase() === from);
        const toObj = countryList.find(c => c.code.toLowerCase() === to);

        resultBox.textContent = `${amount} ${fromObj ? fromObj.symbol : from.toUpperCase()} = ${converted.toFixed(2)} ${toObj ? toObj.symbol : to.toUpperCase()}`;
    } catch (err) {
        resultBox.textContent = "Error fetching rates!";
    }
})