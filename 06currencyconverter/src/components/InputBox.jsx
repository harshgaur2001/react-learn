import React, { useId } from "react";

function InputBox({
  label,
  amount,
  dropdownOptions = [],
  selectedCurrency = "usd",
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`flex gap-4 flex-col sm:flex-row ${className}`}>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor={amountInputId}>{label}</label>
        <input
          className="outline-0 border-b-2 px-2 py-1 rounded-sm border-gray-600 focus:border-blue-600"
          id={amountInputId}
          type="number"
          value={amount}
          disabled={amountDisable}
          placeholder="Amount"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>Currency Type</label>
        <select
          className="cursor-pointer outline-0 border-b-2 px-2 py-1 rounded-sm border-gray-600 focus:border-blue-600"
          disabled={currencyDisable}
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {dropdownOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
