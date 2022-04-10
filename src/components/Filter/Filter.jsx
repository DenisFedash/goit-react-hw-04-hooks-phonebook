import React from "react";
import PropTypes from 'prop-types';
import { TextName, Input } from "components/ContactForm/ContactForm.styled";

export const Filter = ({ value, onChange }) => (
  <TextName>
    Find contact by name<Input type="text" value={value} onChange={onChange} />
  </TextName>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};