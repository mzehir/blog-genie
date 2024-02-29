import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
//* Components
import ViewComp from '../../../components/core/View';
import {PrimaryButton} from '../../../components/custom/TouchableOpacityes';
import {TextWithLink} from '../../../components/custom/Texts';
//* Other
import {INITIAL_NAVIGATORS} from '../../../utils/constant/navigator/initialNavigatorsConstant';

const Container = styled(ViewComp)`
  width: 100%;
  text-align: center;
`;

const Spacer = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(12)};
`;

const FooterSection = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <PrimaryButton text="GET STARTED" />

      <Spacer />

      <TextWithLink
        style={{textAlign: 'center'}}
        text="Don’t have an account?"
        linkText="Sign up"
        onPress={() => navigation.navigate(INITIAL_NAVIGATORS.REGISTER.name)}
      />
    </Container>
  );
};

export default FooterSection;
