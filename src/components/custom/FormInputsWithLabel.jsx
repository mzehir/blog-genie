import React, {useState} from 'react';
import styled from '@emotion/native';
//* Components
import ViewComp from '../core/View';
import TouchableOpacityComp from '../core/TouchableOpacity';
import {FormInputDescLabel} from './Texts';
import {FormTextInput} from './TextInputs';
//* Other
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//* Styled
//* Styled
//* Styled

const InputContainer = styled(ViewComp)`
  height: 49px;
  padding-horizontal: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.palette.default.borderColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Spacer = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(3)};
`;

//* Components
//* Components
//* Components

export const FormTextInputWithLabel = props => {
  const {label, placeholder} = props;

  return (
    <ViewComp>
      <FormInputDescLabel>{label}</FormInputDescLabel>

      <Spacer />

      <InputContainer>
        <FormTextInput placeholder={placeholder} />
      </InputContainer>
    </ViewComp>
  );
};

export const FormPasswordInputWithLabel = props => {
  const {label, placeholder} = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ViewComp>
      <FormInputDescLabel>{label}</FormInputDescLabel>

      <Spacer />

      <InputContainer>
        <FormTextInput
          placeholder={placeholder}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacityComp onPress={togglePasswordVisibility}>
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
          />
        </TouchableOpacityComp>
      </InputContainer>
    </ViewComp>
  );
};
