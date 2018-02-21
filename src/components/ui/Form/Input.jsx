import React from "react";
import PropTypes from "prop-types";

import "./Input.css";

const Input = ({ className, ...props }) => (
  <input className={`form-input ${className}`} {...props} />
);

Input.defaultProps = {
  className: ""
};

Input.propTypes = {
  className: PropTypes.string
};

export default Input;
