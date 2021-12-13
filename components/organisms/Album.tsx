import type { NextPage } from 'next';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Chip} from "@mui/material";
import UserAvatars from "@/components/molecules/UserAvatars";

const Album: NextPage = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Chip label="New" />
            <UserAvatars />
            <CardMedia
                component="img"
                alt="album cover"
                height="345"
                image="/cover.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Album Title
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Artist name
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Album;
