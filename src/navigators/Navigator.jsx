import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InitialNavigator from './InitialNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <InitialNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
