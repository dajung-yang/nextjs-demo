import type { NextPage } from 'next';
import {AvatarGroup, Avatar, Typography, Stack} from "@mui/material";

const UserAvatars: NextPage = () => {
    return (
        <Stack direction="row" alignItems="center">
            <AvatarGroup>
                <Avatar src="/cover.jpg"/>
                <Avatar src="/cover.jpg"/>
            </AvatarGroup>
            <Typography>1,234명이 참여중</Typography>
        </Stack>
    )
}

export default UserAvatars;
