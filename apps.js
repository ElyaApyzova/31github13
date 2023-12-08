const currencyEl = document.getElementById("currency");
const amountEl = document.getElementById("amount");
const exchangeButtonEl = document.getElementById("exchange-button");
const resultEl = document.getElementById("result");

const exchangeCurrency = () => {
  const currency = currencyEl.value;
  const amount = parseFloat(amountEl.value);

  const result = amount * currency; // Replace currency with the appropriate conversion rate

  resultEl.innerHTML = "Result: " + result;
};

exchangeButtonEl.addEventListener("click", exchangeCurrency);
