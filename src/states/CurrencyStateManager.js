export const initCurrencyState = () => {
  return {
    baseCurrency: "EUR",
    previousBaseCurrency: "EUR",
    currency: "EUR",
    previousCurrency: "EUR",
    exchangeRate: 1,
    result: 0
  };
};

export const initEmptyState = () => {
  return {
    baseCurrency: "",
    currency: "",
    exchangeRate: 0,
    result: 0
  };
};

export const reducerCurrency = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_BASE_CURRENCY":
      return {
        ...state,
        baseCurrency: payload,
        previousBaseCurrency: state.baseCurrency
      };
    case "UPDATE_CURRENCY":
      return {
        ...state,
        currency: payload,
        previousCurrency: state.currency
      };
    case "UPDATE_EXCHANGE_RATE":
      return {
        ...state,
        exchangeRate: payload
      };
    case "UPDATE_RESULT":
      return {
        ...state,
        result: payload
      };
    case "SET_STATE":
      return {
        ...state
      };
    default:
      return state;
  }
};
