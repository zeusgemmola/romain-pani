import { useEffect } from "react";

export const InputWithLabel = ({
  id,
  label,
  onChangeFunction,
  inputValue,
  classNameCondition
}) => {
  useEffect(() => {
    window.M.updateTextFields();
  }, []);
  return (
    <>
      <input
        id={id}
        type="text"
        className={classNameCondition}
        value={inputValue}
        onChange={onChangeFunction}
      />
      <span
        className="helper-text"
        data-error="Erreur"
        data-success="Valide"
      ></span>
      <label htmlFor={id}>{label}</label>
    </>
  );
};
