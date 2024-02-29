import React from 'react';
import styled from '@emotion/native';
//* Components
import ViewComp from '../../../components/core/View';
import {
  WelcomeViewContentText,
  WelcomeViewTitleText,
} from '../../../components/custom/Texts';

const Spacer = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(8)};
`;

const CenterSection = () => {
  return (
    <ViewComp>
      <WelcomeViewTitleText>
        Discover and learn all about the software
      </WelcomeViewTitleText>

      <Spacer />

      <WelcomeViewContentText>
        Sign up to get the latest software news. Let’s get started!
      </WelcomeViewContentText>
    </ViewComp>
  );
};

export default CenterSection;
