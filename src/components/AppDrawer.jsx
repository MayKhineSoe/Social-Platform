import { Drawer, Box, List, ListItem, ListItemButton, ListItemText,ListItemIcon, Divider } from "@mui/material"
import {
    Home as HomeIcon,
    Person as ProfileIcon,
    PersonAdd as RegisterIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material"
import { grey } from "@mui/material/colors"
import { useApp } from "../AppProvider"
import { useNavigate } from "react-router"

export default function AppDrawer() {

    const {openDrawer, setOpenDrawer, auth, setAuth} = useApp()
    const navigate = useNavigate()

    return <Drawer 
            open={openDrawer}
            onClick={() => setOpenDrawer(false)}
            onClose={() => setOpenDrawer(false)}>
        <Box sx={{width:250, height:180, background: grey[500]}}>

        </Box>

        <List>
            <ListItem>
                <ListItemButton onClick={()=>navigate("/")}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
            </ListItem>
            <Divider />

             {auth && (
                <>
                <ListItem>
                <ListItemButton onClick={()=>setAuth(false)}>
                    <ListItemIcon>
                        <ProfileIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </ListItem>
            <Divider />

             <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="LogOut" />
                </ListItemButton>
            </ListItem>
            <Divider />
                </>
             )}

           {!auth && (
            <>
             <ListItem>
                <ListItemButton onClick={()=>navigate("/Login")}>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary="LogIn" />
                </ListItemButton>
            </ListItem>
            <Divider />          

            <ListItem>
                <ListItemButton onClick={()=>navigate("/Register")}>
                    <ListItemIcon>
                        <RegisterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register" />
                </ListItemButton>
            </ListItem>
            <Divider />
            </>
           )}
        </List>
    </Drawer>
}