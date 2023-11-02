/* eslint-disable react/prop-types */
import styles from "./input.module.scss";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Input({ label, name, type = "text", defaultValue, onChange, ...rest }) {
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  if (type === "password") {
    return (
      <div className={styles.input__container}>
        <label>{label}</label>
        <div className={styles.input__passwordContainer}>
          <input
            className={styles.input__password}
            type={inputType}
            id={name}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
            {...rest}
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility()}
            className={styles.btn__password}
          >
            {inputType === "password" ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.input__container}>
      <label>{label}</label>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
