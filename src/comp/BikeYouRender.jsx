import React from 'react';
import { Button, Box, Grid } from '@material-ui/core/';

function BikeYou(props){

  if (props.data.youRent === props.youRent){
    return null;
  }

  function CancelRent(){
    const globalDataStor = [...props.globalData];
    globalDataStor[0][props.id].rent = true;
    globalDataStor[0][props.id].youRent = false;  
    props.globalSetData(globalDataStor);
  }



  return(
    <Box className={props.classesBikeBox}>
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Box>
          {props.data.name} / {props.data.type} / {props.data.price}
        </Box>
      </Grid>
      <Grid item xs={2}>

      </Grid>
      <Grid item xs={2}>
        <Button 
          variant="contained" 
          color="secondary" 
          className={props.classesButton}
          onClick={CancelRent}
        >
          Cancel rent
        </Button>
      </Grid>
    </Grid>
  </Box>
  )
  
}

export default BikeYou;