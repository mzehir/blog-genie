import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
//* Components
import ViewComp from '../../../components/core/View';
import {
  PrimaryButton,
  TextButton,
} from '../../../components/custom/TouchableOpacityes';
//* Other
import {INITIAL_NAVIGATORS} from '../../../utils/constant/navigator/initialNavigatorsConstant';
import {HOME_NAVIGATORS} from '../../../utils/constant/navigator/homeNavigatorsConstant';

const Spacer = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(12)};
`;

const BottomSection = () => {
  const navigation = useNavigation();

  return (
    <ViewComp>
      <PrimaryButton
        text="GET STARTED"
        onPress={() => navigation.navigate(INITIAL_NAVIGATORS.REGISTER.name)}
      />

      <Spacer />

      <TextButton
        text="Continue as Guest"
        onPress={() =>
          navigation.replace(INITIAL_NAVIGATORS.HOME_NAVIGATOR.name, {
            screen: HOME_NAVIGATORS.PROFILE.name,
            params: {
              displayToGo: 'TOPIC',
            },
          })
        }
      />
    </ViewComp>
  );
};

export default BottomSection;
