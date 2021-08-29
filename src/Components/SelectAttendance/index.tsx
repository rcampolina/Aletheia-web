import React, { SelectHTMLAttributes } from "react";


import "./styles.css";

interface SelectAtendanceProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<{
    id: number;
    value: string;
    label: string;
  }[]>;
}

const SelectAttendance: React.FC<SelectAtendanceProps> = ({ ...rest }) => {
  return (
    <div className="select-attendance-block">
      <label htmlFor="condition">Escolha um Atendimento:</label>
      <select name="Atendimento" className="Atendimento" {...rest}>
        <option value="08/03/2020">08/03/2020</option>
      </select>
    </div>
  );
};

export default SelectAttendance;
