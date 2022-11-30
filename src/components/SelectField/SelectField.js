import { encryptedIdGenerator } from "../../utils/generalFunctions";

export const SelectField = ({
  label,
  options,
  name,
  id,
  value,
  onChangeFunction
}) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        className="browser-default"
        name={name}
        id={id}
        onChange={onChangeFunction}
      >
        {options &&
          options.map((option) => {
            return (
              <option key={encryptedIdGenerator()} value={option}>
                {option}
              </option>
            );
          })}
      </select>
    </div>
  );
};
