import { useState, useEffect } from "react";
import Currencyhook from "./hooks/Currencyhook";
import { InputBox } from "./components";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const myCurrencyhook = Currencyhook(from);

  const convert = () => {
    setConvertedAmount(() => (amount * myCurrencyhook[to]).toFixed(2));
  };

  const swap = (e) => {
    e.preventDefault();
    setConvertedAmount(() => amount);
    setAmount(() => convertedAmount);
    setTo(() => from);
    setFrom(() => to);
  };

  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(
            "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg"
          )`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-screen flex justify-center items-center p-2">
          <div className="bg-white/95 rounded-2xl p-5 w-2xl">
            <h2 className="text-3xl text-gray-600 text-center mb-5 font-bold">
              Currency Converter
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <InputBox
                  label="From"
                  amount={amount}
                  dropdownOptions={Object.keys(myCurrencyhook)}
                  selectedCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  amountDisable={false}
                  currencyDisable={false}
                  className=""
                />
              </div>
              <div className="text-center my-[-10px]">
                <button
                  className="bg-gray-600 text-white px-4 py-1 rounded-lg cursor-pointer m-auto shadow-sm duration-200 hover:bg-gray-700"
                  onClick={(e) => swap(e)}
                >
                  Swap
                </button>
              </div>
              <div className="bg-white mb-5 rounded-2xl p-5 shadow-sm">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  dropdownOptions={Object.keys(myCurrencyhook)}
                  selectedCurrency={to}
                  onCurrencyChange={(currency) => setTo(currency)}
                  amountDisable={true}
                  currencyDisable={false}
                  className=""
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg cursor-pointer duration-200 hover:bg-gray-700"
                >
                  Convert {from.toUpperCase()} {amount} to {to.toUpperCase()}{" "}
                  {convertedAmount}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
