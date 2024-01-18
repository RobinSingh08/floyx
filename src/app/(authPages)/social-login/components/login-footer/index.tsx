import React from 'react';
import Link from 'next/link';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import { allRoutes } from '@/constants/allRoutes';

const LoginFooterWrapper = styled(Box)(() => ({
  marginTop: '54px',
  '& .login-service': {
    '& a': {
      fontSize: '15px',
      fontWeight: '400',
      lineHeight: '22.5px',
      color: '#5798FF',
    },
  },
}));
const LoginFooter = ({ hideLinks }: { hideLinks?: boolean }) => {
  const { palette } = useTheme();

  return (
    <LoginFooterWrapper>
      {!hideLinks && (
        <Stack
          spacing={{
            md: '42px',
            xs: '20px',
          }}
          mb="13px"
          className="login-service"
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Link prefetch={false} href={allRoutes.termsAndConditions}>
            Terms of service
          </Link>
          <Link prefetch={false} href={allRoutes.privacyPolicy}>
            Privacy Policy
          </Link>
          <Link prefetch={false} href={allRoutes.cookiesPolicy}>
            Cookie Use
          </Link>
        </Stack>
      )}
      <Typography
        variant="h6"
        fontSize="16px"
        fontWeight="400"
        lineHeight="24px"
        color={palette.primary[300]}
        sx={{ '& a': { color: '#5798FF' } }}
      >
        © {new Date().getFullYear()} Powered by Floyx, LLC.
      </Typography>
    </LoginFooterWrapper>
  );
};

export default LoginFooter;
