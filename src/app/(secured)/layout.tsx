import React from 'react';
import DrawerAppBar from './drawer';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
import { getMetaData } from '@/lib/SEO';
import { Box } from '@mui/material';
import { ToastProvider } from '@/components/Toast/useToast';
import AuthProvider from '../context/AuthProvider';

export default function RootLayout({ children, content, rightContent }: any) {
  return (
    <>
      <DrawerAppBar>
        <Container fixed maxWidth="lg">
          <ToastProvider>
            <AuthProvider>
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                <Box sx={{ width: '70%' }}>
                  {content}
                </Box>
                <Box sx={{ width: '30%' }}>
                  {rightContent}
                </Box>
                {children}
              </Container>
            </AuthProvider>
          </ToastProvider>
        </Container>
      </DrawerAppBar>
    </>
  );
}

export const metadata = getMetaData({
  title: 'Floyx | Decentralized World',
  description: 'Floyx | Decentralized World',
});
