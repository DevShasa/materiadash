import './App.css'
import { ThemeProvider, Box, CssBaseline } from '@mui/material'
import theme from './config/theme'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import SideNav from './components/SideNav'
import AppHeader from './components/AppHeader'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
            <CssBaseline />
            <AppHeader />
            <Box sx={styles.container}>
              <BrowserRouter>              
                <SideNav />
                <Box component={'main'} sx={styles.main}>
                    <AppRoutes />
                </Box>
              </BrowserRouter>
            </Box>
            </ProSidebarProvider>
          </ThemeProvider>

    </>
  )
}
/** @type {import("@mui/material").SxProps}*/
const styles = {  
  container:{
    display:"flex",
    bgcolor: 'neutral.light',
    height: "calc(100% - 64px)"
    },
  main:{
    p:1,
    width:'100%',
    height:'100%'
  }
}

export default App
