import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    return (
        <div className="input-block">
            {/* if (label != undefined) {<label htmlFor={name}>{label?}</label>} */}
            <input type="text" id={name} {...rest} />
        </div>
    );
};

export default Input;