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
      <AuthViewTitleText>Welcome Back</AuthViewTitleText>

      <Spacer />

      <AuthViewContentText>
        We offer you the chance to continue from where you left off.
      </AuthViewContentText>
    </Container>
  );
};

export default TitleSection;
