// @ts-nocheck

import moment from 'moment';
import { getCookie, deleteCookie } from 'cookies-next';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { signOut } from 'next-auth/react';
import router from 'next/router';
export const getRelativeTime = (date: string) => {
  const dateObject = new Date(date);
  const sec = dateObject.getSeconds();
  const min = dateObject.getMinutes();
  const hh = dateObject.getHours();
  const dd = dateObject.getDate();
  const mm = dateObject.getMonth();
  const yyyy = dateObject.getFullYear();
  date = `${moment([yyyy, mm, dd, hh, min, sec]).fromNow(true)} ago`;
  return date;
};

export const showErrorMessages = (errorKeys: string[]): string => {
  return errorKeys
    .map(errorKey =>
      errorKey
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    )
    .join('. ');
};
// Define a helper function to check if we're on the server
const isServer = () => typeof window === 'undefined';

const redirectToLogin = () => {
  //if (!isServer()) {
  console.log('redirection =>');
  //const router: NextRouter = require('next/router').default;
  window.location.href = '/login';
  //router.push('/login').catch(e => console.error('Redirection Error:', e));
  //}
  // Server-side redirects should be handled in getServerSideProps or getInitialProps
};

export const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers, { getState }) => {
    const token = getCookie(
      'FLOYX_TOKEN',
      isServer() ? getState()?.req : getCookie('FLOYX_TOKEN')
    );
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    } else {
      router.push('/login');
    }
    return headers;
  },
  responseHandler: async response => {
    if (response.status === 401) {
      deleteCookie('FLOYX_TOKEN');
      deleteCookie('next-auth.session-token');
      await signOut({ redirect: true });
      router.push('/login');
      return;
    }
    // You need to return a valid response format here
    return response.json();
  },
});

export const months = [
  { label: 'January', value: '01' },
  { label: 'February', value: '02' },
  { label: 'March', value: '03' },
  { label: 'April', value: '04' },
  { label: 'May', value: '05' },
  { label: 'June', value: '06' },
  { label: 'July', value: '07' },
  { label: 'August', value: '08' },
  { label: 'September', value: '09' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' },
];

export const years = Array.from({ length: 2023 - 2000 + 1 }, (_, index) => ({
  label: String(index + 2000),
  value: String(index + 2000),
}));
