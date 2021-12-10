import * as React from "react";
import type {NextPage} from 'next'
import {Box, AppBar, Toolbar, Typography, IconButton, Badge} from "@mui/material";
import {Notifications, Search} from "@mui/icons-material";

const NavigationBar: NextPage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}
                    >
                        Metabeat
                    </Typography>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="notifications"
                            color="inherit"
                        >
                            <Badge
                                badgeContent={17}
                                color="error"
                            >
                                <Notifications />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="search"
                            color="inherit"
                        >
                            <Search />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavigationBar;
