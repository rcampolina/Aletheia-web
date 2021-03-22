import React, { ChangeEventHandler, EventHandler, FormEventHandler, useState } from 'react';
import Calendar from 'react-calendar';
import TimePicker from '../../Components/TimePicker';

import './styles.css';
import 'react-calendar/dist/Calendar.css';

function DateTimePicker(dateHour: any) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimes, setSelectedTimes] = useState([{ hour: '' }]);

  function addNewHour() {
    setSelectedTimes([...selectedTimes, { hour: '' }]);
  }

  function generateDateTime() {
    console.log('generate');

    selectedDate.setMilliseconds(0)
    selectedDate.setSeconds(0)
    selectedDate.setMinutes(0)
    selectedDate.setHours(18)
    
    dateHour = String(selectedDate);
    console.log(dateHour)
  }

  return (
    <div className="calendar-container" onClick={generateDateTime}>
      <Calendar value={selectedDate} onClickDay={setSelectedDate} locale="pt-BR" />
      <div className="timepicker">
        <button type="button" className="addHour" onClick={addNewHour}>
          + Novo Horário
        </button>
        {selectedTimes.map((selectedtime, index) => {
          return (
            <div key={index}>
              <TimePicker
                id="hour"
                name="hour"
                value={selectedtime.hour}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DateTimePicker;
