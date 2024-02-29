import React from 'react';
import styled from '@emotion/native';
//* Components
import ViewComp from '../../../components/core/View';
import ImgComp from '../../../components/core/Img';

const Container = styled(ViewComp)`
  align-items: center;
  position: relative;
`;

const LogoWrapper = styled(ViewComp)`
  position: absolute;
  top: 0;
`;

const TopSection = () => {
  return (
    <Container>
      <ImgComp source={require('../../../assets/images/welcome.png')} />

      <LogoWrapper>
        <ImgComp source={require('../../../assets/images/appLogo.png')} />
      </LogoWrapper>
    </Container>
  );
};

export default TopSection;
