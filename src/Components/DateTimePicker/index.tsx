import React, {  useState } from 'react';
import Calendar from 'react-calendar';
import TimePicker from '../../Components/TimePicker';

import './styles.css';
import 'react-calendar/dist/Calendar.css';

interface DatasInterface {
  id?: number,
  data?: Date,
  hora?: string,
}

function DateTimePicker(dateHour: any) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimes, setSelectedTimes] = useState<DatasInterface[]>([{id: 0, data: selectedDate, hora: ''}]);
  const [disableButton, setDisableButton] = useState(true)
 
  function addNewHour() {
    setSelectedTimes([...selectedTimes, { }]);
    setDisableButton(true)
  }

  function onChangeHour(hora: string) {
    setSelectedTimes([{id: selectedTimes.length + 1, data: selectedDate, hora: hora}]);
    // setDisableButton(false)
  }

  return (
    <div className="calendar-container" >
      <Calendar value={selectedDate} onClickDay={setSelectedDate} locale="pt-BR" onChange={() => console.log()} />
      <div className="timepicker">
        <button type="button" className="addHour" onClick={addNewHour} disabled={disableButton}>
          + Novo Horário
        </button>
        {selectedTimes.map((selectedtime, index) => {
          return (
            <div key={index}>
              <TimePicker
                id="hour"
                name="hour"
                value={selectedtime.hora}
                onChange={e => onChangeHour(e.target.value)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DateTimePicker;
