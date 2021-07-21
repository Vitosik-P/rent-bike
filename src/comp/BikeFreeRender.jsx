import { Button, Box, Grid } from '@material-ui/core/';
import React from 'react';

function BikeFreeRender(props) {
  if (props.data.rent === props.youRent) {
    return null;
  }
  if (props.data.youRent !== props.youRent){
    return null;
  }

  function Rent(){
    const globalDataStor = [...props.globalData];
    globalDataStor[0][props.id].rent = false;
    globalDataStor[0][props.id].youRent = true;  
    props.globalSetData(globalDataStor);
  }

  function Delete(){
    const globalDataStor = [...props.globalData];
    globalDataStor[0][props.id].rent = false;  
    props.globalSetData(globalDataStor);
  }

  return (
    <Box className={props.classesBikeBox} >
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Box>
            {props.data.name} / {props.data.type} / {props.data.price}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Button 
            variant="contained" 
            color="primary" 
            className={props.classesButton}
            onClick={Rent}
          > 
            Rent
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button 
            variant="contained" 
            color="secondary" 
            className={props.classesButton} 
            onClick={Delete}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BikeFreeRender;
