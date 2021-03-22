import React, { useState } from "react";
import CheckButton from "../../Components/CheckButton";
import PageHeader from "../../Components/PageHeader";
import SelectAttendance from "../../Components/SelectAttendance";
import api from "../../services/api";

import "./styles.css";

function Check() {
  const [names, setNames] = useState([]);
  async function returnNames() {
    console.log(names.length)
    if (names.length === 0) {
      const res = await api.get('users').then(res => res.data);
      const nomes = res.map((r: any) => r.name);
      setNames(nomes);
    }
  }
  returnNames();
  return (
    <div className="container">
      <PageHeader title="Check-In / Check-Out" />
      <SelectAttendance />

      <div className="main-check">
        <div>
          {
            names.map((name, index) => {
              return(
                <ul key={index}> - {name} <CheckButton title="Check-In" /> </ul>
              )
            })
          }
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Check;
