
//import './App.css';
//import TodoList from './components/todo/TodoList'

import React from 'react';
import Card from './card/Card'
import Calc from './components/calc/Calc'
import LstTasks from './components/Task/LstTasks'
import Login from  './components/login/Login';

export default function App(){
    return (
        <div>

        <Card prpGnr = "f" prpName1 = "Annie" prpMyLastName="Yang" prpProfession = "Student"></Card>
        <Card prpGnr = "m" prpName1 = "Charles" prpMyLastName="Smith" prpProfession = "Architect"></Card>

        
        <Calc/>
        <LstTasks/>
        <Login/>
        </div>
       

    );
}