import React from 'react';
import styled from '@emotion/native';
//* Components
import ViewComp from '../../../components/core/View';
//* Sections
import TitleSection from './Title';
import ContentSection from './Content';
import FooterSection from './Footer';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
`;

const SpacerOne = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(41)};
`;

const SpacerTwo = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(74)};
`;

const LoginView = () => {
  return (
    <Container>
      <TitleSection />

      <SpacerOne />

      <ContentSection />

      <SpacerTwo />

      <FooterSection />
    </Container>
  );
};

export default LoginView;
