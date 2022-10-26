import React from 'react';
import styles from './Chart.module.css';
import {Line, Bar} from 'react-chartjs-2'
import {useSelector} from "react-redux";
import {selectDaily, selectCountry} from "../covidSlice";

const Chart: React.FC = () => {
    const daily = useSelector(selectDaily);
    const dates = daily.map(({Date}) => Date);
    const country = useSelector(selectCountry);

    // data && ()はdataが存在するときに()の中身を実行する。
    const lineChart = daily[0] && (
        <Line
            data={{
                labels: dates.map((date) => new Date(date).toDateString()),
                datasets: [
                    {
                        data: daily.map((data) => data.Confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    },
                    {
                        data: daily.map((data) => data.Deaths),
                        label: "Deaths",
                        borderColor: "#ff3370",
                        fill: true,
                    },
                ],
            }}
        />
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
};

export default Chart;