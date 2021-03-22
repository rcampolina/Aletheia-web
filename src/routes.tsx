import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Attendance from './pages/Attendance';
import Check from './pages/Check';
import Circle from './pages/Circle';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Pacients from './pages/Pacients';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import SelectPacients from './pages/SelectPacients';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/menu" component={Menu} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/check" component={Check} />
            <Route path="/circle" component={Circle} />
            <Route path="/pacients" component={Pacients} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/selectPacients" component={SelectPacients} />
        </BrowserRouter>
    );
}

export default Routes;