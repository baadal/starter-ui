import React from 'react';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = props => {
  return (
    <button type="button" className={`${styles.root} py-1.5 px-3`} style={{ fontSize: '1rem', fontWeight: 'bold' }}>
      {props.children}
    </button>
  );
};

export default Button;

export interface ButtonProps {}
