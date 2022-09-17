import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
    demoChannelUrl,
    demoVideoTitle,
    demoVideoUrl,
    demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "358px", md: "320px" },
                boxShadow: "none",
                borderRadius: 0,
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        width: { xs: "100%", sm: "358px", md: "320px" },
                        height: 183,
                        objectFit: "contain",
                    }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: "#000", height: "106px" }}>
                <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#fff"
                    >
                        {snippet?.title.slice(0, 60) ||
                            demoVideoTitle.slice(0, 60)}{" "}
                        ...
                    </Typography>
                </Link>
                <Link
                    to={
                        snippet?.channelId
                            ? `/video/${snippet?.channelId}`
                            : `${demoChannelUrl}`
                    }
                >
                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="#d70e4e"
                        sx={{ alignItems: "center" }}
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle
                            sx={{ fontSize: 12, color: "#d70e4e", ml: "5px" }}
                        />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
