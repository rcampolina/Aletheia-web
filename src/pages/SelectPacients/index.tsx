import React from 'react';

import './styles.css';
import 'react-calendar/dist/Calendar.css';
import PageHeader from '../../Components/PageHeader';
import TablePacients from '../../Components/TablePacients';


function SelectPacients() {
  return (
    <div className="container">
      <PageHeader title="Seleção de Auxiliados">
      </PageHeader>
      <div className="main-container">
        <TablePacients />
      </div>
      
    </div>        
  );
}

export default SelectPacients