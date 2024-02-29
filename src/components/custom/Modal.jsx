import React from 'react';
import styled from '@emotion/native';
import {Modal, View} from 'react-native';
import ViewComp from '../core/View';
import TouchableOpacityComp from '../core/TouchableOpacity';
import CloseSvg from '../../assets/icons/close.svg';
import {ModalTitleText} from './Texts';

const Container = styled(ViewComp)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContentWrapper = styled(ViewComp)`
  width: 100%;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: white;
`;

const Line = styled(ViewComp)`
  width: 46px;
  border: 2px solid rgba(110, 127, 152, 1);
  opacity: 0.2;
  border-radius: 3px;
`;

const CloseButton = styled(TouchableOpacityComp)`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const SpacerOne = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(10)};
`;

const SpacerTwo = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(6)};
`;

const SpacerThree = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(22)};
`;

const ModalComp = props => {
  const {visible, setVisible, title, children, ...other} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <Container>
        <ContentWrapper>
          <Line />

          <SpacerOne />

          <ViewComp style={{width: '100%', alignItems: 'flex-end'}}>
            <CloseButton onPress={() => setVisible(false)}>
              <CloseSvg />
            </CloseButton>
          </ViewComp>

          <SpacerTwo />

          <View style={{width: '100%', alignItems: 'flex-start'}}>
            <ModalTitleText>{title}</ModalTitleText>

            <SpacerThree />

            {children}
          </View>
        </ContentWrapper>
      </Container>  
    </Modal>
  );
};

export default ModalComp;
