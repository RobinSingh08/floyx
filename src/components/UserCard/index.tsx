'use client';
import { Box, Link, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import DateParser from '../DateParser';
import moment from 'moment';
import CalendarIcon from '@/images/image/calendarIcon';
import UserAvatar from '../UserAvatar';
import { ApiEndpoint } from '@/lib/services/ApiEndpoints';
import UsernameLink from '../usernameLink';
import React from 'react';

export const UserCardBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  padding: '20px 0px',
  '& .display-flex': {
    display: 'flex',
    alignItems: 'center',
  },
}));

function UserCard({
  name,
  username,
  timestamp,
  shared,
  showDate,
  comment,
  isArticle = false,
  isPost = false,
}: {
  name: string;
  username: string;
  timestamp?: number;
  shared?: any;
  showDate?: any;
  comment?: string;
  isArticle?: boolean;
  isPost?: boolean;
}) {
  const { palette } = useTheme();

  return (
    <UserCardBox>
      <Box sx={{ marginRight: '10px' }}>
        <UserAvatar
          alt={name}
          src={`${ApiEndpoint.CurrentUserDetails}/avatar/${username}`}
          sx={{ width: '50px', height: '50px' }}
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={isPost ? 'column' : 'row'}
        justifyContent="space-between"
        width="100%"
      >
        <Box
          gap={isArticle ? 0 : 1}
          display="flex"
          flexDirection={isArticle ? 'column' : 'row'}
          width="100%"
        >
          <Typography
            variant="subtitle1"
            component={'span'}
            color={palette.mode === 'light' ? 'primary' : 'textPrimary'}
          >
            {name}{' '}
          </Typography>
          <UsernameLink
            variant="subtitle2"
            username={username}
            onClick={e => e.stopPropagation()}
          />
          {` ${shared ? ' shared a ' : ''}`}
          {shared && (
            <Link href="#" underline="none">
              post
            </Link>
          )}
        </Box>
        {timestamp && (
          <Box>
            <DateParser date={timestamp} />
          </Box>
        )}
        {showDate && (
          <Box
            width="40%"
            sx={{
              display: 'flex',
              alignItems: isArticle ? 'flex-end' : 'center',
            }}
          >
            <CalendarIcon />
            &nbsp;
            <Typography
              variant="caption"
              component={'span'}
              color="textPrimary"
              marginBottom={0}
            >
              {moment(showDate).format('MMM DD, YY')}
            </Typography>
          </Box>
        )}
        {comment && (
          <Box>
            <Typography>{comment}</Typography>
          </Box>
        )}
      </Box>
    </UserCardBox>
  );
}

export default React.memo(UserCard);
