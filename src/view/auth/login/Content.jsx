import React from 'react';
import styled from '@emotion/native';
//* Components
import ViewComp from '../../../components/core/View';
import {
  GoogleRegisterButton,
  TextButtonLight,
} from '../../../components/custom/TouchableOpacityes';
import {HorizontalDividerWithCenterText} from '../../../components/custom/Dividers';
import {
  FormTextInputWithLabel,
  FormPasswordInputWithLabel,
} from '../../../components/custom/FormInputsWithLabel';

const Container = styled(ViewComp)`
  width: 100%;
`;

const HorizontalDividerWithCenterTextWrapper = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(31)};
`;

const Spacer = styled(ViewComp)`
  height: ${props => props.theme.spacing.byHeight(20)};
`;

const SpacerTwo = styled(ViewComp)`
  height: ${props => props.theme.spacing.byHeight(26)};
`;

const GoogleRegister = () => {
  return <GoogleRegisterButton />;
};

const ManualRegister = () => {
  return (
    <ViewComp>
      <FormTextInputWithLabel label="Email" placeholder="Enter Your Email" />

      <Spacer />

      <FormPasswordInputWithLabel
        label="Password"
        placeholder="Enter Your Password"
      />
    </ViewComp>
  );
};

const ForgotPassword = () => {
  return <TextButtonLight text="Forgot Password?" onPress={() => console.log('ForgotPassword')} />;
};

const ContentSection = () => {
  return (
    <Container>
      <GoogleRegister />

      <HorizontalDividerWithCenterTextWrapper>
        <HorizontalDividerWithCenterText text="OR" />
      </HorizontalDividerWithCenterTextWrapper>

      <ManualRegister />

      <SpacerTwo />

      <ForgotPassword />
    </Container>
  );
};

export default ContentSection;
