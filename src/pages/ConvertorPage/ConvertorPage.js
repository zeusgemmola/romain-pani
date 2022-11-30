import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { getExchangeRates } from "../../apiCalls/getExchangeRates";
import { InputWithLabel } from "../../components/Input/InputWithLabel";
import { SelectField } from "../../components/SelectField/SelectField";
import Spinner from "../../components/Spinner";
import {
  initCurrencyState,
  reducerCurrency
} from "../../states/CurrencyStateManager";
import { baseCurrencies } from "../../utils/baseCurrencies";
import { currencies } from "../../utils/currencies";
import { compose } from "../../utils/generalFunctions";
import "./ConvertorPage.css";
const ConvertorPage = () => {
  const [inputValue, setInputValue] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [state, dispatch] = useReducer(reducerCurrency, initCurrencyState());
  const replaceCommaByPoint = (input) => input.toString().replaceAll(",", ".");

  const isNumber = (input) => {
    return input !== "" && !isNaN(+input);
  };
  const isStartingByUseless0 = (input) =>
    input[0] === "0" && input[1] !== "." && input[1] !== ",";

  const removeUseless0 = (input) => {
    if (isStartingByUseless0(input) && input.length >= 2) {
      var myArr = String(input)
        .split("")
        .map((num) => {
          return num;
        });
      return removeUseless0(myArr.splice(1, myArr.length - 1).join(""));
    }
    return input;
  };

  const isValueValid = compose(isNumber, replaceCommaByPoint);

  const handlingInputValueChange = compose(setInputValue, removeUseless0);

  const inputClassNameCondition = isValueValid(inputValue)
    ? "valid"
    : "invalid";

  const apiCallCondition =
    inputClassNameCondition === "valid" &&
    inputValue !== "0" &&
    inputValue !== 0;
  const displayResult = isLoading ? <Spinner /> : state.result;
  useEffect(() => {
    if (apiCallCondition) {
      if (
        state.baseCurrency !== state.previousBaseCurrency ||
        state.currency !== state.previousCurrency
      ) {
        if (state.baseCurrency === state.currency) {
          dispatch({ type: "UPDATE_EXCHANGE_RATE", payload: 1 });
        } else {
          setIsLoading(true);
          getExchangeRates(state.baseCurrency, state.currency).then((result) =>
            dispatch({ type: "UPDATE_EXCHANGE_RATE", payload: result })
          );
          setIsLoading(false);
        }
      }
    }
  }, [
    apiCallCondition,
    state.baseCurrency,
    state.previousBaseCurrency,
    state.currency,
    state.previousCurrency
  ]);

  useEffect(() => {
    if (inputClassNameCondition === "valid") {
      dispatch({
        type: "UPDATE_RESULT",
        payload: inputValue * state.exchangeRate
      });
    } else {
      dispatch({
        type: "UPDATE_RESULT",
        payload: "Erreur"
      });
    }
  }, [inputValue, state.exchangeRate, inputClassNameCondition]);

  return (
    <div className="container">
      <div className="row">
        <h3>Convertisseur</h3>
        <div className="col s8">
          <div className="row">
            <div className="col s6">
              <SelectField
                label={"To"}
                options={baseCurrencies}
                name="inputDevises"
                id="inputDevises"
                value={state.baseCurrency}
                onChangeFunction={(e) =>
                  dispatch({
                    type: "UPDATE_BASE_CURRENCY",
                    payload: e.target.value
                  })
                }
              />
            </div>
            <div className="col s6">
              <SelectField
                label={"To"}
                options={currencies}
                name="inputDevises"
                id="inputDevises"
                value={state.currency}
                onChangeFunction={(e) =>
                  dispatch({
                    type: "UPDATE_CURRENCY",
                    payload: e.target.value
                  })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <InputWithLabel
                id="amount"
                label="Amount"
                onChangeFunction={(e) =>
                  handlingInputValueChange(e.target.value)
                }
                inputValue={inputValue}
                classNameCondition={inputClassNameCondition}
              />
            </div>
            <div className="input-field col s12">
              <h5>Result : {displayResult}</h5>
            </div>
            <Link to="/jesuisuneerreur">Test page erreur </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertorPage;
