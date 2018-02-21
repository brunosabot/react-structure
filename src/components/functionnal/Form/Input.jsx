import React from "react";
import PropTypes from "prop-types";

import UIInput from "../../ui/Form/Input";

class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.props.onChange(props.value);
  }

  handleChange(e) {
    this.setState({ value: e.target.value }, () => {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <UIInput
        {...this.props}
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

Input.defaultProps = {
  value: ""
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  // Value of the form could be any type. Consider string only?
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any
};

export default Input;
