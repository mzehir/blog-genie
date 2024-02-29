import styled from '@emotion/native';
import TextComp from '../core/Text';

//* Styled
//* Styled
//* Styled

// rgba(110, 127, 152, 1)
const StyledDefaultText = styled(TextComp)`
  color: ${props => props.theme.palette.default.color};
  font-family: Inter;
`;

// rgba(40, 89, 233, 1)
const StyledPrimaryText = styled(TextComp)`
  color: ${props => props.theme.palette.primary.color};
  font-family: Inter;
`;

// rgba(5, 16, 40, 1)
const StyledSecondaryText = styled(TextComp)`
  color: ${props => props.theme.palette.secondary.color};
  font-family: Inter;
`;

// rgba(110, 127, 152, 1)
export const StyledDefaultLightButonText = styled(TextComp)`
  color: ${props => props.theme.palette.defaultLightButton.color};
  font-family: Inter;
`;

// rgba(5, 16, 40, 1)
export const StyledDefaultButonText = styled(TextComp)`
  color: ${props => props.theme.palette.defaultButton.color};
  font-family: Inter;
`;

// rgba(255, 255, 255, 1)
export const StyledPrimaryButonText = styled(TextComp)`
  color: ${props => props.theme.palette.primaryButton.color};
  font-family: Inter;
`;

//* Components
//* Components
//* Components

export const WelcomeViewTitleText = props => {
  const {children, ...other} = props;

  return (
    <StyledSecondaryText
      style={{
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 40,
        textAlign: 'center',
      }}
      {...other}>
      {children}
    </StyledSecondaryText>
  );
};

export const WelcomeViewContentText = props => {
  const {children, ...other} = props;

  return (
    <StyledDefaultText
      style={{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.20000000298023224,
        textAlign: 'center',
      }}
      {...other}>
      {children}
    </StyledDefaultText>
  );
};

export const AuthViewTitleText = props => {
  const {children, ...other} = props;

  return (
    <StyledSecondaryText
      style={{
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 29,
      }}
      {...other}>
      {children}
    </StyledSecondaryText>
  );
};

export const AuthViewContentText = props => {
  const {children, ...other} = props;

  return (
    <StyledDefaultText
      style={{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
      }}
      {...other}>
      {children}
    </StyledDefaultText>
  );
};

export const FormInputDescLabel = props => {
  const {children, ...other} = props;

  return (
    <StyledSecondaryText
      style={{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
      }}
      {...other}>
      {children}
    </StyledSecondaryText>
  );
};

export const TextWithLink = ({text, linkText, onPress, ...other}) => {
  return (
    <StyledSecondaryText
      style={{
        ...other.style,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        letterSpacing: 0.01,
      }}>
      {text}{' '}
      <StyledPrimaryText
        onPress={() => onPress()}
        style={{
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 19,
          letterSpacing: 0.01,
          textDecorationLine: 'underline',
        }}>
        {linkText}
      </StyledPrimaryText>
    </StyledSecondaryText>
  );
};

export const HorizontalDividerWithCenterTextLabel = props => {
  const {children, ...other} = props;

  return (
    <StyledDefaultText
      style={{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        letterSpacing: 0.01,
        textAlign: 'center',
        marginHorizontal: 10,
      }}
      {...other}>
      {children}
    </StyledDefaultText>
  );
};
