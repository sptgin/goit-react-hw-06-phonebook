import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

export default function Filter({ value, onChange }) {
  return (
    <div>
      <h3 className="filter__header">Find contacts by name :</h3>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className="filter__input"
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
