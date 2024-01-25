// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState, useMemo, useRef, useEffect } from 'react'; // Use `useState` and `useMemo` hooks directly
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material';
import ProfileSection from '../_components/profileSection';
import AboutSection from '../_components/about';
import { GradientText } from '@/components/usernameLink';
import ProfilePostList from '../_components/profilePostList';
import ProfileArticleList from '../_components/articleList';
import PostIcon from '@/assets/images/svg/postIcon';
import ArticleIcon from '@/iconComponents/articleIcon';
import AboutIcon from '@/assets/images/svg/aboutIcon';
import ArticleProfileIcon from '@/assets/images/svg/articleIcon';

const Page: React.FC = () => {
  const { palette } = useTheme();
  const parentRef = useRef(null);
  const [clientHeight, setClientHeight] = useState(200);
  const [value, setValue] = useState(0); // Simplified import

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setClientHeight(window?.document?.body?.clientHeight ?? 200);
  }, []);

  // useMemo to avoid unnecessary re-renders of the tabs
  const tabs = useMemo(
    () => (
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
        sx={{ borderBottom: `1px solid ${palette.action.border}` }}
      >
        <Tab
          iconPosition="start"
          icon={<PostIcon active={value === 0} />}
          label={
            value === 0 ? (
              <GradientText fontWeight="normal">Posts</GradientText>
            ) : (
              'Posts'
            )
          }
          aria-label="phone"
        />
        <Tab
          iconPosition="start"
          icon={<ArticleProfileIcon active={value === 1} />}
          label={
            value === 1 ? (
              <GradientText fontWeight="normal">Articles</GradientText>
            ) : (
              'Articles'
            )
          }
          aria-label="favorite"
        />
        <Tab
          iconPosition="start"
          icon={<AboutIcon active={value === 2} />}
          label={
            value === 2 ? (
              <GradientText fontWeight="normal">About</GradientText>
            ) : (
              'About'
            )
          }
          aria-label="favorite"
        />
      </Tabs>
    ),
    [value, palette.action.border, handleChange]
  );

  // Conditional rendering of sections
  const renderSection = useMemo(() => {
    switch (value) {
      case 0:
        return <ProfilePostList />;
      case 1:
        return <ProfileArticleList />;
      case 2:
        return <AboutSection />;
      default:
        return null;
    }
  }, [value]);

  return (
    <Box
      sx={{
        overflowY: 'auto',
        maxHeight: '100vh',
      }}
      ref={parentRef}
    >
      <ProfileSection />
      <Box sx={{ mb: 2 }}>{tabs}</Box>
      <Box>{renderSection}</Box>
    </Box>
  );
};

export default Page;
