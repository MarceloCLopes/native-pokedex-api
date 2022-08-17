import { Routes } from './src/routes';
import { StatusBar } from 'expo-status-bar';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='auto' backgroundColor='transparent' translucent />
      <Routes />
    </ThemeProvider>
  );
}
