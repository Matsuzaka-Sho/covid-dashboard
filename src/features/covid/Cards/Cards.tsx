import React from 'react';
import styles from "./Cards.module.css"
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

const Cards: React.FC = () => {
    const daily = useSelector(selectDaily);

    return (
        <div className={styles.container}>
            <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} md={3} component={Card} className={styles.infected}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <MdLocalHospital/>
                            Infected Persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                // 感染者を表示
                                end={daily[daily.length-1].Confirmed}
                                duration={1.5}
                                // 3桁ごとにカンマを入れてくれる
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <AiFillLike/>
                            Recovered Persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                // 感染者を表示
                                end={daily[daily.length-1].Recovered}
                                duration={1.5}
                                // 3桁ごとにカンマを入れてくれる
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <GiHastyGrave/>
                            Dead Persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                // 感染者を表示
                                end={daily[daily.length-1].Deaths}
                                duration={1.5}
                                // 3桁ごとにカンマを入れてくれる
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;