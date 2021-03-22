import React, { ButtonHTMLAttributes } from 'react';

import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ title, type, ...rest }) => {
    return (
        <div className="button-block">
          <button type={type||"button"} {...rest}>{title}</button>
        </div>
    );
};

export default PrimaryButton;