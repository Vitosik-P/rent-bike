import React from 'react';
import { Button, Box, Grid } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/core/styles';

function BikeRent(props) {
  
  function CreateRent(){
    const dataStateStore = props.dataState;
    const dataStateItem = {
      id: dataStateStore[0].length,
      name: props.bikeName,
      type: props.bikeType,
      price: Number(props.bikeRent),
      rent: true,
      youRent: false
    }
    dataStateStore[0] = [...dataStateStore[0], dataStateItem];
    props.setDataState(dataStateStore)
    console.log(props.dataState); 
  }

  

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <input
          className={props.classesTextField}
          type="text"
          placeholder="Bike name"
          value={props.bikeName}
          onChange={props.BikeNameChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Box className={props.classesSelectWraper}>
          <select
            className={props.classesTextField + ' ' + props.classesSelect}
            type="text"
            placeholder="Bike type"
            onChange={props.BikeTypeChange}
          >
            <option value="Mount">Mount</option>
            <option value="City">City</option>
          </select>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <input
          className={props.classesTextField}
          type="number"
          defaultValue={props.bikeRent}
          step="0.01"
          min="0"
          max="1000"
          onChange={props.BikeRentChange}
        />
      </Grid>
      <Grid item xs={2}>
        <ThemeProvider theme={props.theme}>
          <Button
            variant="contained"
            className={props.classesButton}
            style={props.themePaletteSuccessCustom}
            onClick={CreateRent}
          >
            Sumbit rent
          </Button>
        </ThemeProvider>
      </Grid>
    </Grid>
  )


}

export default BikeRent;

