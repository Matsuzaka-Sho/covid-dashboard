import React from 'react';
import './App.css';
import Cards from "./features/covid/Cards/Cards";
import Chart from "./features/covid/Chart/Chart";
import PieChart from "./features/covid/PieChart/PieChart";
import SwitchCountry from "./features/covid/SwitchCountry/SwitchCountry";
import DashBoard from "./features/covid/DashBoard/DashBoard";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<Cards/>*/}
                {/*<Chart/>*/}
                {/*<PieChart/>*/}
                {/*<SwitchCountry/>*/}
                <DashBoard/>
            </header>
        </div>
    );
}

export default App;
