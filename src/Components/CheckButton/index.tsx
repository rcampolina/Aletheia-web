import React, { ButtonHTMLAttributes } from 'react';

import './styles.css'

interface CheckButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const CheckButton: React.FC<CheckButtonProps> = ({ title, type, ...rest }) => {
    return (
        <div className="check-button-block">
          <button type={type||"button"} >{title}</button>
        </div>
    );
};

export default CheckButton;