import { Typography, useTheme, Box, Avatar } from "@mui/material"
import {Menu, MenuItem, Sidebar, useProSidebar} from "react-pro-sidebar"
import { DashboardOutlined, StyleOutlined, SourceOutlined, AnalyticsOutlined } from "@mui/icons-material"
import avatar from "../../src/assets/avatar.png"


function SideNav() {
  
  const theme = useTheme();
  const { collapsed } = useProSidebar()

  return (
    <Sidebar
      style={{
        height:'100%',
        top:"auto"
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
    >
      <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt='Channel Name'
          src={avatar}
        />
        {!collapsed 
          ? <Typography variant="body2" sx={{mt:1}}>Your Channel</Typography>
          : null
        }
        {!collapsed 
          ? <Typography variant="overline" sx={{mt:1}}>Channel Details</Typography>
          : null
        }

      </Box>
      <Menu
        menuItemStyles={{
          button: ({active})=>({ backgroundColor: active ? theme.palette.neutral.medium : undefined, })
        }}
      >
        <MenuItem active={true} icon={<DashboardOutlined />}>
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem active={false} icon={<SourceOutlined />}>
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem active={false} icon={<AnalyticsOutlined />}>
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem active={false} icon={<StyleOutlined />}>
          <Typography variant="body2">Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}


/** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer:{
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    my: 5
  }, 
  avatar:{
    width: "40%",
    height: 'auto'
  }
}

export default SideNav