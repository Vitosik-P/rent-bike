import React, { useState } from 'react';

function TotalRent(props) {
  let totalRentStore = 0;
  props.dataState[0].map(element => {
    if (element.youRent) {
      totalRentStore += element.price;
    }
  });
  return totalRentStore.toFixed(2)

}

export default TotalRent;
