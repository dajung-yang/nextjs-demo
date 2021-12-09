import type { NextPage } from 'next'
import {Box, BottomNavigation, BottomNavigationAction} from "@mui/material";

const Test: NextPage = () => {
    return (
        <Box>
            <BottomNavigation showLabels>
                <BottomNavigationAction label="main"></BottomNavigationAction>
                <BottomNavigationAction label="home"></BottomNavigationAction>
                <BottomNavigationAction label="setting"></BottomNavigationAction>
            </BottomNavigation>
        </Box>
    )
}

export default Test
