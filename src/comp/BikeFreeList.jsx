import React from 'react';
import BikeFreeRender from './BikeFreeRender'
import {Box} from '@material-ui/core/';
import { useEffect } from 'react';

function BikeFreeList(props) {

  return (
    <Box>
      {props.data[0].map(element =>
        <BikeFreeRender
          key={element.id}
          id={element.id}
          data={element}
          youRent={props.youRent}
          classesBikeBox={props.classesBikeBox}
          classesButton={props.classesButton}
          globalData={props.globalData}
          globalSetData={props.globalSetData}
        />
      )}
    </Box>
  )
}

export default BikeFreeList;