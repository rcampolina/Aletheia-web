import React, { SelectHTMLAttributes, useState } from "react";


import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{
    id: number;
    value: string;
    label: string;
  }[]>;
}




const SelectRegister: React.FC<SelectProps> = ({ options, ...rest }) => {
  const [condition, setCondition] = useState('Normal');
  return (
    <div className="select-block">
      <label htmlFor="condition">Escolha uma condição:</label>
      <select name="condition" className="condition" value={condition} onChange={e => setCondition(e.target.value)} {...rest}>
        <option value="normal">Normal</option>
        <option value="idoso">Iormal</option>
        <option value="doença-grave">Doença Grave</option>
        <option value="animal">Animal</option>
        <option value="mora-fora">Mora Fora</option>
        <option value="gestante">Gestante</option>
        <option value="normal">Normal</option>
      </select>
    </div>
  );
};

export default SelectRegister;
