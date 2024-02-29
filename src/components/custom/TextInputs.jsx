import {useTheme} from '@emotion/react';
import styled from '@emotion/native';
//* Components
import TextInputComp from '../core/TextInput';

//* Styled
//* Styled
//* Styled

const TextInputDefault = styled(TextInputComp)`
  color: ${props => props.theme.palette.default.color};
  font-family: Inter;
`;

//* Components
//* Components
//* Components

export const FormTextInput = props => {
  const theme = useTheme();
  const {...other} = props;

  return (
    <TextInputDefault
      style={{
        flex: 1,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17,
      }}
      placeholderTextColor={theme.palette.default.color}
      {...other}
    />
  );
};
