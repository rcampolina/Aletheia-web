import React, { useState } from 'react';
import api from '../../services/api';

import "./styles.css";

function confirmAttendance(id) {
  console.log('Confirmado: ' + id)
}

const HeaderData = ({ data }) => {
  const keys = Object.keys(data[0]);

  return (
    <thead>
      <tr>
        {keys.map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
  );
};

const BodyData = ({ data }) => {
  const keys = Object.keys(data[0]);

  return (
    <tbody>
      {data.map((dados) => {
        return (
          <tr key={dados.id}>
            <button onClick={confirmAttendance(dados.id)} >Confirmar</button>
            {keys.map((key) => (
              <td key={key}>{dados[key]}</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

const TablePacients = () => {
  const [data, setData] = useState([{}]);
  async function returnData() {
    if (data.length === 1) {
      const res = await api.get('users');
      setData(res.data);
    }
  }
  returnData();
  return (
    <table className="container-table bordered highlight responsive-table">
      <HeaderData data={data} />
      <BodyData data={data} />
    </table>
  );
};

export default TablePacients;
