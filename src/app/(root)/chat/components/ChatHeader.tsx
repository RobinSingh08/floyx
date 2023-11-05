import { imgUser } from '@/assets/images';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
  Typography,
} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import UserAvatar from '../../../../components/UserAvatar';

const ChatWrapper = styled(ListItem)(({ theme }: { theme: Theme }) => ({
  alignItems: 'center',
  gap: '10px',
  padding: '12px 14px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
  '& .MuiListItemText-root': {
    margin: '0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '12px 26px',
    gap: '18px',
  },
}));
const ChatHeader = () => {
  return (
    <ChatWrapper>
      <ListItemAvatar>
        <UserAvatar
          alt="Travis Howard"
          src={imgUser}
          sx={{
            width: { md: '59px', xs: '50px' },
            height: { md: '59px', xs: '50px' },
          }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box>
              <Typography
                color="#fff"
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight={500}
                component="span"
              >
                Michele
              </Typography>
              <Typography
                fontFamily="Poppins"
                fontSize="14px"
                fontWeight={400}
                component="span"
                className="gradient-text"
              >
                @mich23
              </Typography>
            </Box>

            <Button
              size="small"
              sx={{ color: '#FA6B7C' }}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Box>
        }
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="#85838F"
            fontFamily="Poppins"
            fontSize={{ md: '16px', xs: '14px' }}
            fontWeight={500}
          >
            Last seen 1 hour ago
          </Typography>
        }
      />
    </ChatWrapper>
  );
};

export default ChatHeader;
