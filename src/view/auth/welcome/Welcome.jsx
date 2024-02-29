import React from 'react';
import styled from '@emotion/native';
//* Components
import ViewComp from '../../../components/core/View';
//* Sections
import TopSection from './Top';
import CenterSection from './Center';
import BottomSection from './Bottom';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  padding-top: ${props => props.theme.spacing.byHeight(10)};
  background-color: ${props => props.theme.body.background};
`;

const SpacerOne = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(9)};
`;

const SpacerTwo = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(16)};
`;

const ContentWrapepr = styled(ViewComp)`
  padding-horizontal: ${props => props.theme.spacing.byWidth(29)};
`;

const WelcomeView = () => {
  return (
    <Container>
      <TopSection />

      <SpacerOne />

      <ContentWrapepr>
        <CenterSection />

        <SpacerTwo />

        <BottomSection />
      </ContentWrapepr>
    </Container>
  );
};

export default WelcomeView;
