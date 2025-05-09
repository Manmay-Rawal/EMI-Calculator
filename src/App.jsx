import { BrowserRouter} from 'react-router-dom'
import UseRoutes from './Router/UseRoutes.jsx'
import React , { useState } from 'react'
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box sx={{ width: '100vw', height: '100vh', boxSizing: 'border-box' }}>
     <BrowserRouter>
     <UseRoutes setDarkMode={setDarkMode} darkMode={darkMode} />
     </BrowserRouter>
     </Box>
     </ThemeProvider>
  )
}

export default App
