import { useEffect, useState } from "react";

function Currencyhook(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res[currency]);
      });
  }, [currency]);
  return data;
}

export default Currencyhook;
