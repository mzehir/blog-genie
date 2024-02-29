import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../components/core/View';

const StyledAuthLayout = styled(ViewComp)`
  flex: 1;
  background-color: ${props => props.theme.body.background};
  padding-top: ${props => props.theme.spacing.byHeight(38)};
  padding-horizontal: ${props => props.theme.spacing.byWidth(30)};
`;

const AuthLayout = props => {
  const {children, ...other} = props;

  return <StyledAuthLayout {...other}>{children}</StyledAuthLayout>;
};

export default AuthLayout;
