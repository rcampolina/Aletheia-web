import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    link: string;
    title: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({ link, title, ...rest }) => {
    return (
        <div className="button-s-block">
          <Link to={link} ><button type="button" >{title}</button></Link>
        </div>
    );
};

export default SecondaryButton;