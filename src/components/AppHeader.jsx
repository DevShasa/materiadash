import { MenuTwoTone, Notifications, Settings, Logout } from "@mui/icons-material"
import { Box, AppBar, Toolbar, IconButton, Badge } from "@mui/material"
import { useProSidebar } from "react-pro-sidebar"

function AppHeader() {
    const {collapseSidebar, toggleSidebar, broken } = useProSidebar()
  return (
    <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar>
            <IconButton 
                color="secondary"
                onClick={()=> broken ? toggleSidebar(): collapseSidebar()}
            >
                <MenuTwoTone />
            </IconButton>
            <Box 
                component={'img'}
                sx={styles.applogo}
                src='/src/assets/logo.png'
            />
            <IconButton title="Notifications" color="secondary" sx={{marginLeft:"auto"}}>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
            </IconButton>
            <IconButton title='Settings' color="secondary">
                <Settings/>
            </IconButton>
            <IconButton title='Settings' color="secondary">
                <Logout/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

/** @type {import("@mui/material").SxProps}*/
const styles ={
    appBar:{
        bgcolor:'neutral.main'
    }, 
    applogo:{
        borderRadius: 2, 
        width: 50,
        height: 50,
        marginLeft: 2,
        cursor:"pointer"
    }
}

export default AppHeader