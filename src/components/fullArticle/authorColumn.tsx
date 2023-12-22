'use client';

import ArticleIcon from '@/images/image/articleIcon';
import LinkIcon from '@/images/image/linkIcon';
import ProfileTickIcon from '@/images/image/profileTick';
import { useGetFollowStatusMutation } from '@/lib/redux/slices/articleDetails';
import { Box, Typography, Link, Stack, Divider } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import UsernameLink from '../usernameLink';
import UserAvatar from '../UserAvatar';
import { ApiEndpoint } from '@/lib/API/ApiEndpoints';
import {
  useGetProfileAboutQuery,
  useGetProfileDetailsQuery,
} from '@/lib/redux/slices/profile';
import { RoundPrimaryButton } from '../CustomButtons';
import { useRouter } from 'next/navigation';
import FollowUser from '../FollowUser';

export const AuthorDetailBox = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: '35px',
  border: '1px solid ' + theme.palette.primary.boxBorder,
  background: theme.palette.primary.mainBackground,
  padding: '20px 30px',
  borderRadius: '10px',
  '& .header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .position-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  '& .author-box': {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    '& .name': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  '& .author-about': {
    marginTop: '20px',
  },
  '& .more-about-auhtor': {
    marginTop: '35px',
    marginBottom: '45px',
  },
}));

export default function AuthorCoulmn({ details }: any) {
  const [updatePost] = useGetFollowStatusMutation();
  const { palette } = useTheme();
  const router = useRouter();
  const { data: profile } = useGetProfileDetailsQuery(
    { username: details?.user?.username },
    { skip: !details?.user?.username }
  );
  const { data: aboutProfile } = useGetProfileAboutQuery(
    {
      username: details?.user?.username ?? '',
    },
    { skip: !details?.user?.username }
  );
  return (
    <AuthorDetailBox>
      <Box className="header" py={1}>
        <Box minWidth={'40%'}>
          <Typography variant="body1">About Author</Typography>
        </Box>
        <Box className="position-center">
          <Box>
            <RoundPrimaryButton
              variant="outlined"
              size="small"
              sx={{ borderRadius: '30px', padding: '4px 14px' }}
              onClick={() => router.push('/inbox')}
            >
              Message
            </RoundPrimaryButton>
          </Box>
          <Divider variant="middle" />
          <Box>
            <FollowUser
              isFollowed={details?.user?.isFollowed}
              username={details?.user?.username}
            />
          </Box>
          <Divider />
        </Box>
      </Box>
      <Box className="author-box">
        <Box sx={{ marginRight: 2 }}>
          <UserAvatar
            alt={details?.user?.name}
            src={`${ApiEndpoint.CurrentUserDetails}/avatar/${details?.user?.username}`}
            sx={{ width: '50px', height: '50px' }}
          />
        </Box>
        <Stack alignItems="flex-start">
          <Stack direction={'row'} gap={1}>
            <Typography variant="subtitle1" component={'span'}>
              {details?.user?.name}
            </Typography>
            <UsernameLink username={details?.user?.username} />
          </Stack>
          <Stack justifyContent={'flex-start'} direction="row" gap={2}>
            <Stack direction="row">
              <ProfileTickIcon height={18} stroke={palette.primary[300]} />
              <Typography
                variant="body2"
                sx={{ margin: '0px 5px', opacity: 0.6 }}
              >
                Followers:
              </Typography>
              <Typography variant="body2">
                {profile?.numberOfFollowers}
              </Typography>
            </Stack>
            <Stack direction="row">
              <ArticleIcon />
              <Typography
                variant="body2"
                sx={{ margin: '0px 5px', opacity: 0.6 }}
              >
                Articles:
              </Typography>
              <Typography variant="body2">
                {profile?.numberOfArticles}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box className="author-about">
        <Typography sx={{ color: palette.primary[300] }} variant="body1">
          {profile?.shortDescription}
        </Typography>
        {/* {JSON.stringify(aboutProfile?.about)} */}
        <Box sx={{ display: 'flex' }} py={0.5}>
          <Box sx={{ marginRight: '25px' }}>
            <Typography variant="subtitle2">
              {aboutProfile?.about?.location}
            </Typography>
          </Box>
          {aboutProfile?.about?.website && (
            <Box>
              <Link
                href="#"
                underline="none"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {<LinkIcon />}
                {aboutProfile?.about?.website}
              </Link>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="more-about-auhtor">
        <Typography variant="h5">More From Author</Typography>
        {/* <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ paddingTop: '20px' }}
        >
          {authorDetails?.user &&
            authorDetails?.user?.more &&
            (authorDetails?.user?.more).length &&
            (authorDetails?.user?.more).map((val: any, index: number) => (
              <Grid item xs={2} sm={4} md={6} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    border: '1px solid white',
                    borderRadius: '10px',
                    padding: '15px 10px',
                  }}
                >
                  <Box sx={{ marginRight: '15px' }}>
                    <img src={val?.thumbnail} width={60} height={60} />
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: '100%' }}
                      src={val?.thumbnail}
                      alt="thumbnail"
                    />
                  </Box>
                  <Box>
                    <Box>
                      <Typography variant="subtitle2">{val?.title}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Box>
                        <Avatar
                          alt={details?.user?.name}
                          src={details?.user?.avatar}
                          sx={{ width: 20, height: 20, marginRight: '10px' }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="caption">
                          by {details?.user?.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid> */}
      </Box>
    </AuthorDetailBox>
  );
}
