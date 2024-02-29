import React from 'react';
import TabNavigator from './tab/Tab';
import {getHomeNavigatorsConstantAsArray} from '../utils/constant/navigator/homeNavigatorsConstant';

const {initialRouteName, screens} = getHomeNavigatorsConstantAsArray();

const tabNavigatorScreenOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 70,
    borderRadius: 16,
    background: 'rgba(255, 255, 255, 0.4)',
    shadowColor: 'rgba(111, 111, 111, 0.12)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
};

const HomeNavigator = () => {
  return (
    <TabNavigator
      initialRouteName={initialRouteName}
      screens={screens}
      screenOptions={tabNavigatorScreenOptions}
    />
  );
};

export default HomeNavigator;
