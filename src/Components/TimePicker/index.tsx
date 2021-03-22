import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface TimeProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
}

const TimePicker: React.FC<TimeProps> = ({ name, ...rest }) => {
    return (
        <div className="time-block">
            {/* if (label != undefined) {<label htmlFor={name}>{label?}</label>} */}
            <input type="time" id={name} {...rest} />
        </div>
    );
};

export default TimePicker;