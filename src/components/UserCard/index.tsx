'use client';
import { Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DateParser from '../DateParser';
import moment from 'moment';
import CalendarIcon from '@/images/image/calendarIcon';
import UserAvatar from "../UserAvatar";
import { ApiEndpoint } from "@/lib/services/ApiEndpoints";

export const UserCardBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "20px 0px",
  "& .display-flex": {
    display: "flex",
    alignItems: "center"
  }
}))

export default function UserCard({
  name,
  username,
  timestamp,
  shared,
  showDate,
  comment,
}: {
  name: string;
  username: string;
  timestamp?: number;
  shared?: any;
  showDate?: any;
  comment?: string,
}) {
  return (
    <UserCardBox>
      <Box sx={{marginRight: '10px'}}>
        <UserAvatar
          alt={name}
          src={`${ApiEndpoint.CurrentUserDetails}/avatar/${username}`}
          sx={{ width: "50px", height: "50px" }}
        />
      </Box>
      <Box>
        <Box className="display-flex">
          <Typography variant="subtitle1" component={"span"} color="textPrimary">
            {name}
            <Link href="#" underline="none" >{` @${username} `}</Link>
            {` ${shared ? " shared a " : ""}`}
            {shared && <Link href="#" underline="none" >post</Link>}
          </Typography>
        </Box>
        {timestamp &&
          <Box>
            <DateParser date={timestamp} />
          </Box>}
          {showDate && (
          <Box sx={{display:'flex', alignItems:'center'}}>
            <CalendarIcon />
            {moment(showDate).format('MMM DD, YY')}
          </Box>
        )}
        {comment && <Box><Typography>{comment}</Typography></Box>}
      </Box>
    </UserCardBox>
  )
}