import type { NextPage } from 'next';
import NavigationBar from "@/components/organisms/NavigationBar";
import TopBar from "@/components/organisms/TopBar";
import Album from "@/components/organisms/Album";
import {Box} from "@mui/material";

const Main: NextPage = () => {
    return (
        <Box>
            <TopBar />
            <Album />
            <NavigationBar />
        </Box>
    )
}

export default Main;
