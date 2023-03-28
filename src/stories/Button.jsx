import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ Text, textColor, backgroundColor, label, ...props }) => {
  return (
    <div>
      
    <button
      type="button"
      className={'storybook-btn'}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        
      }}
      {...props}
    >
      {label}
    </button>
    </div>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  textColor:PropTypes.string,
  size:PropTypes.string
};


Button.defaultProps={
  label: 'Button',
}




