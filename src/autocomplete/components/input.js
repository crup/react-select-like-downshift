import React from "react";
import "./input.css";

const getStyles = isOpen => {
  const styles = ["container"];
  isOpen && styles.push("active");
  return styles.join(" ");
};

const Input = ({ getInputProps, isOpen, setOpenMenu }) => {
  const onBlur = () => setOpenMenu(false);
  const onFocus = () => setOpenMenu(true);

  return (
    <div className={getStyles(isOpen)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className={"searchIcon"}
      >
        <g fill="none" fillRule="nonzero" opacity=".3">
          <path d="M-4-4h24v24H-4z" />
          <g fill="#465166">
            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z" />
          </g>
        </g>
      </svg>
      <input
        placeholder={"Search Characters"}
        className={"input"}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        {...getInputProps()}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
