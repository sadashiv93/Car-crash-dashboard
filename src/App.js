import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { setCrashData, selectCrashData } from "./features/carCrashSlice"
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Grid, Typography, CardActions } from '@material-ui/core';


function CrashInfo(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" component="p">
          {"vehicle 1 :" + (props.crash.vehicle_type_code1 ? props.crash.vehicle_type_code1 : "not present")}
        </Typography>
        <Typography variant="body2" component="p">
          {"vehicle 2 :" + (props.crash.vehicle_type_code2 ? props.crash.vehicle_type_code2 : "not present")}
        </Typography>
        <Typography variant="body2" component="p">
          {"crash date :" + (props.crash.crash_date ? props.crash.crash_date : "not present")}
        </Typography>
        <Typography variant="body2" component="p">
          {"crash time :" + (props.crash.crash_time ? props.crash.crash_time : "not present")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  )
}

function App() {
  const [crashes, setCrashes] = useState([])
  const fetchCarCrash = () => {
    const limit = 20
    const url = `https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=${limit}`
    return fetch(url)
      .then(res => res.json())
      .then(res => { console.log('updated...'); setCrashes(res) })
  }

  useEffect(() => { fetchCarCrash() }, [])

  return (
    <div className="App">
      {
        <div>
          <Grid container>
            {crashes.map(item => (
              <Grid xs={4}>
                <CrashInfo crash={item} />
              </Grid>
            ))}
          </Grid>
          <Button onClick={() => { console.log('fethcing...'); fetchCarCrash() }}>Next</Button>
        </div>
      }
    </div>
  );
}

export default App;
