import type { NextPage } from 'next';
import NavigationBar from "@/components/organisms/NavigationBar";
import TopBar from "@/components/organisms/TopBar";
import {Box} from "@mui/material";

const Test3: NextPage = () => {
    return (
        <Box>
            <TopBar />
                My Beat
            <NavigationBar />
        </Box>
    )
}

export default Test3;
