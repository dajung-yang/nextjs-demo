import type { NextPage } from 'next';
import NavigationBar from "@/components/organisms/NavigationBar";
import TopBar from "@/components/organisms/TopBar";
import {Box} from "@mui/material";

const Test2: NextPage = () => {
    return (
        <Box>
            <TopBar />
                샤우팅
            <NavigationBar />
        </Box>
    )
}

export default Test2;
