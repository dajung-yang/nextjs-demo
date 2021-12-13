import type { NextPage } from 'next';
import NavigationBar from "@/components/organisms/NavigationBar";
import TopBar from "@/components/organisms/TopBar";
import Album from "@/components/organisms/Album";
import {Box} from "@mui/material";
import MainFrame from "@/components/organisms/MainFrame";

const Main: NextPage = () => {
    return (
        <MainFrame>


            <Album />
        </MainFrame>
    )
}

export default Main;
