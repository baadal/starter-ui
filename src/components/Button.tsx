import React from 'react';

const Button: React.FC<ButtonProps> = props => {
  return (
    <button type="button" style={{ fontSize: '1rem', fontWeight: 'bold', padding: '0.5rem 1rem' }}>
      {props.children}
    </button>
  );
};

export default Button;

export interface ButtonProps {}
