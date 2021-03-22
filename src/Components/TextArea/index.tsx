import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, ...rest }) => {
    return (
        <div className="textarea-block">
            <textarea id={name} {...rest} />
        </div>
    );
};

export default TextArea;