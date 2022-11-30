import configData from "../config.json";
export const getExchangeRates = async (baseCurrency, currency) => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", configData.REACT_APP_API_KEY);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  const response = await fetch(
    "https://api.freecurrencyapi.com/v1/latest?apikey=" +
      configData.REACT_APP_API_KEY +
      "&currencies=" +
      currency +
      "&base_currency=" +
      baseCurrency,
    requestOptions
  );
  const data = await response.json();
  return data.data[currency];
};
