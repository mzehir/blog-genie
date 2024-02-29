import React from 'react';
import styled from '@emotion/native';
import StackNavigator from './stack/Stack';

import ViewComp from '../components/core/View';
import {HeaderLeftButton} from '../components/custom/TouchableOpacityes';
import {getInitialNavigatorsConstantAsArray} from '../utils/constant/navigator/initialNavigatorsConstant';

const HeaderLeftContainer = styled(ViewComp)`
  margin-left: ${props => props.theme.spacing.byWidth(5)};
`;

const {initialRouteName, screens} = getInitialNavigatorsConstantAsArray();

const stackNavigatorScreenOptions = {
  title: null,
  headerShadowVisible: false,
  headerLeft: (navigation, navigationHook) => (
    <HeaderLeftContainer>
      <HeaderLeftButton onPress={() => navigationHook.goBack()} />
    </HeaderLeftContainer>
  ),
};

const InitialNavigator = () => {
  return (
    <StackNavigator
      initialRouteName={initialRouteName}
      screens={screens}
      screenOptions={stackNavigatorScreenOptions}
    />
  );
};

export default InitialNavigator;
