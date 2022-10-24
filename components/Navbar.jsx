import { AppBar, Toolbar, styled,Typography } from '@mui/material'
import React from 'react'
const StyledToolBar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const Navbar=()=>{
    return (
        <AppBar position="static">
            <StyledToolBar>
                <Typography>
                HostelBuddy
                </Typography>

            </StyledToolBar>
        </AppBar>
    )
}
export default Navbar