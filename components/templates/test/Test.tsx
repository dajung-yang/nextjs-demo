import type { NextPage } from 'next';
import NavigationBar from "@/components/organisms/NavigationBar";
import TopBar from "@/components/organisms/TopBar";
import {Box} from "@mui/material";

const Main: NextPage = () => {
    return (
        <Box>
            <TopBar />
            <NavigationBar />
        </Box>
    )
}

export default Main;
