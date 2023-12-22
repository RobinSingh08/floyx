import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button, { ButtonProps } from '@mui/material/Button';
import { Tooltip, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { ErrorOutlineOutlined } from '@mui/icons-material';
import { RoundPrimaryButton } from './CustomButtons';

export default function ButtonWithLoading({
  isLoading,
  children,
  isSuccess,
  isError,
  buttonType = 'DEFAULT',
  ...props
}: ButtonProps & {
  isLoading: boolean;
  isSuccess?: boolean;
  isError: boolean;
  buttonType?: 'ROUND' | 'DEFAULT';
}) {
  const { palette } = useTheme();
  const [status, setStatus] = React.useState('');

  React.useEffect(() => {
    if (isSuccess) {
      setStatus('SUCCESS');
    }
    if (isError) {
      setStatus('ERROR');
    }
    const timeout = setTimeout(() => setStatus(''), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isSuccess, isError]);

  const statusIcon =
    status === 'ERROR' ? (
      <ErrorOutlineOutlined fontSize="large" sx={{ color: 'white' }} />
    ) : (
      <CheckIcon fontSize="large" sx={{ color: 'white', height: '22px' }} />
    );
  const getButtonType = () => {
    if (buttonType === 'DEFAULT') {
      return (
        <Button
          color={
            status === 'ERROR'
              ? 'error'
              : status === 'SUCCESS'
                ? 'success'
                : 'primary'
          }
          variant="outlined"
          disabled={isLoading}
          {...props}
        >
          {status ? statusIcon : children}
        </Button>
      );
    }
    return (
      <RoundPrimaryButton
        color={
          status === 'ERROR'
            ? 'error'
            : status === 'SUCCESS'
              ? 'success'
              : 'primary'
        }
        disabled={isLoading}
        {...props}
      >
        {status ? statusIcon : children}
      </RoundPrimaryButton>
    );
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Tooltip title={status === 'ERROR' ? 'Error occured!' : ''}>
        {getButtonType()}
      </Tooltip>
      {isLoading && (
        <CircularProgress
          size={30}
          thickness={8}
          sx={{
            color: palette.secondary.main,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </Box>
  );
}
