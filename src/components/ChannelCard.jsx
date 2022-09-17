import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "350px", md: "320px" },
                height: "326px",
                margin: "auto",
                marginTop,
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    <CardMedia
                        image={
                            channelDetail?.snippet?.thumbnails?.high?.url ||
                            demoProfilePicture
                        }
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: "50%",
                            height: "180px",
                            width: "180px",
                            mb: 2,
                            border: "1px solid #281547",
                            objectFit: "contain",
                            backgroundPosition: "center",
                        }}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle
                            sx={{ fontSize: 12, color: "#d70e4e", ml: "5px" }}
                        />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {millify(
                                parseInt(
                                    channelDetail?.statistics?.subscriberCount
                                ),
                                { precision: 2 }
                            )}{" "}
                            subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;
