import type { NextPage } from 'next';
import { useRouter } from "next/router";
import Link from "next/link";
import {Box, Paper, BottomNavigation, BottomNavigationAction} from "@mui/material";
import { Home, Person, Whatshot } from '@mui/icons-material';

const NavigationBar: NextPage = () => {
    return (
        <Box>
            <Paper
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation showLabels>
                    <Link href="/test/test">
                        <BottomNavigationAction
                            label="홈"
                            icon={<Home />}
                        />
                    </Link>
                    <Link href="/test/shouting">
                        <BottomNavigationAction
                            label="샤우팅"
                            icon={<Whatshot />}
                        />
                    </Link>
                    <Link href="/test/myBeat">
                        <BottomNavigationAction
                            label="마이비트"
                            icon={<Person />}
                        />
                    </Link>
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default NavigationBar;
