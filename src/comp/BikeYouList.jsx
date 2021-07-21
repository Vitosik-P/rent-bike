import React from 'react';
import BikeYouRender from './BikeYouRender'
import {Box} from '@material-ui/core/';


function BikeYouList(props) {
  return (
    <Box>
      {props.data[0].map(element =>
        <BikeYouRender
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

export default BikeYouList;