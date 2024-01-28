// @ts-nocheck

import moment from 'moment';
import { getCookie, deleteCookie } from 'cookies-next';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { signOut } from 'next-auth/react';
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

const logout = async () => {
  deleteCookie('FLOYX_TOKEN');
  deleteCookie('next-auth.session-token');
  await signOut({ redirect: false });
};

export const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers, { getState }) => {
    const token = getCookie(
      'FLOYX_TOKEN',
      isServer() ? getState()?.req : getCookie('FLOYX_TOKEN')
    );
    headers.set('authorization', `Bearer ${token}`);
    return headers;
  },
  responseHandler: async response => {
    if (response.status === 401) {
      logout();
    }
    // You need to return a valid response format here
    return response.json();
  },
});

export const fetchServerData = async (
  url: string
): { isError: boolean; data: any } => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { isError: true, data: null };
    }
    const data = await res.json();
    return { isError: false, data: data?.value?.data };
  } catch (e) {
    console.log('Fetch Error:', e);
    return { isError: true, data: data?.value?.data };
  }
};

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

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timer: any;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const formatIndianNumber = (num: number) => {
  if (num < 1000) {
    return num;
  } else if (num >= 1000 && num <= 9999) {
    return Math.floor(num / 1000) + 'K';
  } else if (num >= 10000 && num <= 999999) {
    return Math.floor(num / 1000) + 'K+';
  } else if (num >= 1000000 && num <= 9999999) {
    return Math.floor(num / 1000000) + 'M';
  } else if (num >= 10000000 && num <= 999999999) {
    return Math.floor(num / 1000000) + 'M+';
  } else {
    return num;
  }
};

export const addLinks = (content: any) => {
  if (!content) {
    return '';
  }

  const profileRegex = /@\[([^\]]+)\]\(([^)]+)\)/gm;
  const link =
    '<a href="/profile/$2" class="post-hyperlink" style="background:linear-gradient(to right, #AB59FF, #858FFF, #4D9AFF); -webkit-background-clip: text;-webkit-text-fill-color: transparent;font-weight: normal;color: white;">@$2</a>';

  const urlRegex = /(https?:\/\/[^\s\[\]()]+)/g;

  const urlLink = match => {
    let displayText = match;
    // Remove special characters from the URL
    const cleanedUrl = displayText.replace(/[\[\]()]/g, '');

    if (displayText.length > 40) {
      displayText = displayText.substring(0, 40) + '...';
    }
    return `<a class="post-hyperlink" href="${cleanedUrl}" target="_blank">${displayText}</a>`;
  };

  return content.replace(urlRegex, urlLink).replace(profileRegex, link);
};

export function copyTextToClipboard(text, onCopied = () => {}) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(onCopied, () => fallbackCopyTextToClipboard(text, onCopied));
  } else {
    fallbackCopyTextToClipboard(text);
  }
}

function fallbackCopyTextToClipboard(text, onCopied) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      onCopied();
    } else {
      console.error('Fallback: Copying text command was unsuccessful');
    }
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }
  document.body.removeChild(textArea);
}
