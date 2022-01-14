import React from 'react';

const Button: React.FC<ButtonProps> = props => {
  return (
    <button type="button" className="text-purple-600 text-base font-bold bg-red-50 py-1.5 px-3 rounded">
      {props.children}
    </button>
  );
};

export default Button;

export interface ButtonProps {}
