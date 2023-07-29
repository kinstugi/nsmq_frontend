import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';
import '../styles/global.css';

// Define the props for MyApp component
interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any; // You can replace `any` with the type of your `pageProps` data
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  // Custom app-wide logic goes here

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
