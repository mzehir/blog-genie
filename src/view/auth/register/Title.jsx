import React from 'react';
import styled from '@emotion/native';
//* Components
import ViewComp from '../../../components/core/View';
import {
  AuthViewContentText,
  AuthViewTitleText,
} from '../../../components/custom/Texts';

const Container = styled(ViewComp)`
  width: 100%;
`;

const Spacer = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(10)};
`;

const TitleSection = () => {
  return (
    <Container>
      <AuthViewTitleText>Join Us</AuthViewTitleText>

      <Spacer />

      <AuthViewContentText>
        Jin our Software community for the latest news and insights
      </AuthViewContentText>
    </Container>
  );
};

export default TitleSection;
