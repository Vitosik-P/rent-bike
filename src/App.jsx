import React, { useState } from 'react';

import Emoji from './comp/Emoji';
import BikeFreeList from './comp/BikeFreeList';
import BikeYouList from './comp/BikeYouList';
import useStyles from './AppStyle';
import TotalRent from './comp/TotalRent';
import BikeRent from './comp/BikeRent'

import data from './data';

import {Box, Grid } from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/styles';


function App() {
  const [bikeName, setBikeName] = useState('some bike');
  const [bikeRent, setBikeRent] = useState(12.99);
  const [bikeType, setBikeType] = useState('Горы');
  const [dataState, setDataState] = useState([data])

  //console.log(dataState)

  const theme = createMuiTheme({
    palette: {
      successCustom: { 
        backgroundColor: '#23ba99',
        color: '#fff',
      },
    },
  });

  function BikeNameChange(event) {
    setBikeName(event.target.value);
  }

  function BikeTypeChange(event){
    setBikeType(event.target.value);
  }

  function BikeRentChange(event){
    setBikeRent(event.target.value);
  }

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <h1>Awesom Bike Rental</h1>
      <Box className={classes.mt4}>
        <h3>
          <Emoji symbol="🤑" label="Cash" />
          Create new rent
        </h3>
        <Box className={classes.rentBox}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Box fontWeight={600} fontSize={12}>
                Bike name
            </Box>
            </Grid>
            <Grid item xs={4}>
              <Box fontWeight={600} fontSize={12}>
                Bike type
            </Box>
            </Grid>
            <Grid item xs={2}>
              <Box fontWeight={600} fontSize={12}>
                Price
            </Box>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
          <BikeRent 
            dataState={dataState}
            setDataState={setDataState}
            classesTextField={classes.textField}
            bikeName={bikeName}
            bikeRent={bikeRent}
            bikeType={bikeType}
            BikeNameChange={BikeNameChange}
            BikeTypeChange={BikeTypeChange}
            BikeRentChange={BikeRentChange}
            classesSelectWraper={classes.selectWraper}
            classesSelect={classes.select}
            
            theme={theme}
            classesButton={classes.button}
            themePaletteSuccessCustom={theme.palette.successCustom}

          />  
        </Box>
      </Box>
      <Box className={classes.mt4}>
        <h3>
          <Emoji symbol="🤩" label="Cash" />
          Your rent (Total : $<TotalRent dataState={dataState}/>)
        </h3>
        <BikeYouList
          data={dataState} 
          classesBikeBox={classes.bikeBox} 
          classesButton={classes.button}
          youRent={false}
          globalData={dataState}
          globalSetData={setDataState}
        />
      </Box>
      <Box className={classes.mt4}>
        <h3>
          <Emoji symbol="🚲" label="Cash" />
          Availaible bicycles
        </h3>
        <BikeFreeList 
          data={dataState} 
          classesBikeBox={classes.bikeBox} 
          classesButton={classes.button}
          youRent={false}  
          globalData={dataState}
          globalSetData={setDataState}
        />
      </Box> 
    </Box>
  );
}

export default App;
