import React from 'react';
import DateTimePicker from '../../Components/DateTimePicker';

import './styles.css';
import 'react-calendar/dist/Calendar.css';
import PageHeader from '../../Components/PageHeader';
import SecondaryButton from '../../Components/SecondaryButton';
import PrimaryButton from '../../Components/PrimaryButton';

function Attendance() {
  var dateTimePicker = {dateHour: '' };
  function saveAttendance() {
    console.log("Salvar")
      
    console.log(dateTimePicker);
  }

  return (
    <div className="container">
      <PageHeader title="Cadastro de Atendimento">
      </PageHeader>
      <div className="main-container">
        <DateTimePicker dateHour={dateTimePicker.dateHour} />
        <div className="buttons">
          <SecondaryButton link="/selectPacients" title="Selecionar Auxiliados" onClick={saveAttendance} />
          <PrimaryButton title="Salvar" onClick={saveAttendance} />
        </div>
      </div>
      
    </div>        
  );
}

export default Attendance;