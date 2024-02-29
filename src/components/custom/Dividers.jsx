import styled from '@emotion/native';
import ViewComp from '../core/View';
import {HorizontalDividerWithCenterTextLabel} from './Texts';

const HorizontalDividerWithCenterTextContainer = styled(ViewComp)`
  flex-direction: row;
  align-items: center;
  height: 19px;
`;

const HorizontalDividerWithCenterTextLine = styled(ViewComp)`
  flex: 1;
  height: 1px;
  background-color: ${props => props.theme.palette.default.borderColor};
`;

export const HorizontalDividerWithCenterText = ({text}) => {
  return (
    <HorizontalDividerWithCenterTextContainer>
      <HorizontalDividerWithCenterTextLine />

      <HorizontalDividerWithCenterTextLabel>
        {text}
      </HorizontalDividerWithCenterTextLabel>

      <HorizontalDividerWithCenterTextLine />
    </HorizontalDividerWithCenterTextContainer>
  );
};
