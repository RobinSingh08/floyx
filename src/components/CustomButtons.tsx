import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material';

const StyledRoundPrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(87, 152, 255, 0.23)',
  borderRadius: '24px',
  fontWeight: 500,
  color: 'rgba(87, 152, 255, 1)',
  padding: '6px, 19px, 6px, 19px',
  size: '1rem',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(87, 152, 255, 0.33)',
  },
}));

function RoundPrimaryButton(props: ButtonProps) {
  return (
    <StyledRoundPrimaryButton variant="text">
      {props.children}
    </StyledRoundPrimaryButton>
  );
}

export { RoundPrimaryButton };