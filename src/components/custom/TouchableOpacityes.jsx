import styled from '@emotion/native';
import TouchableOpacityComp from '../core/TouchableOpacity';
import {StyledDefaultButonText, StyledDefaultLightButonText, StyledPrimaryButonText} from './Texts';
import GoogleSvg from '../../assets/icons/google.svg';
import ChevronLeftSvg from '../../assets/icons/chevronLeft.svg';

//* Styled
//* Styled
//* Styled

const StyledDefaultLightButton = styled(TouchableOpacityComp)`
  background-color: ${props =>
    props.theme.palette.defaultLightButton.background};
`;

const StyledDefaultButton = styled(TouchableOpacityComp)`
  border-color: ${props => props.theme.palette.default.borderColor};
  background-color: ${props => props.theme.palette.defaultButton.background};
`;

const StyledPrimaryButton = styled(TouchableOpacityComp)`
  background-color: ${props => props.theme.palette.primaryButton.background};
`;

//* Components
//* Components
//* Components

export const GoogleRegisterButton = props => {
  return (
    <StyledDefaultButton
      style={{
        height: 53,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}
      {...props}>
      <GoogleSvg height={32} width={32} />

      <StyledDefaultButonText
        style={{
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 17,
          letterSpacing: 0.01,
          marginLeft: 10,
        }}>
        Continue with google
      </StyledDefaultButonText>
    </StyledDefaultButton>
  );
};

export const PrimaryButton = ({text, onPress}) => {
  return (
    <StyledPrimaryButton
      style={{
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <StyledPrimaryButonText
        style={{
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 24,
          letterSpacing: 1,
          textAlign: 'center',
        }}>
        {text}
      </StyledPrimaryButonText>
    </StyledPrimaryButton>
  );
};

export const TextButton = ({text, onPress}) => {
  return (
    <TouchableOpacityComp onPress={onPress}>
      <StyledDefaultButonText
        style={{
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 24,
          letterSpacing: 1,
          textAlign: 'center',
        }}>
        {text}
      </StyledDefaultButonText>
    </TouchableOpacityComp>
  );
};

export const TextButtonLight = ({text, onPress}) => {
  return (
    <StyledDefaultLightButton onPress={onPress}>
      <StyledDefaultLightButonText
        style={{
          textAlign: 'right',
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 15,
          letterSpacing: 0.01,
        }}>
        {text}
      </StyledDefaultLightButonText>
    </StyledDefaultLightButton>
  );
};

// goBack() button
export const HeaderLeftButton = ({onPress}) => {
  return (
    <TouchableOpacityComp onPress={onPress}>
      <ChevronLeftSvg />
    </TouchableOpacityComp>
  );
};
