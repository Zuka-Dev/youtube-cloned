import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import millify from "millify";
import { Loader, Videos } from "./";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";

const VideoDetail = () => {
    const { id } = useParams();
    const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/videos",
        params: { part: "snippet,statistics", id: id },
        headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
    };
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios
            .request(options)
            .then(({ data }) => {
                setVideoDetail(data.items[0]);
            })
            .catch(function (error) {
                console.error(error);
            });

        fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
            (data) => setVideos(data.items)
        );
    }, [id]);
    if (!videoDetail?.snippet) return <Loader />;
    const {
        snippet: { title, channelId, channelTitle },
        statistics: { viewCount, likeCount },
    } = videoDetail;
    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box
                        sx={{ width: "100%", position: "sticky", top: "86px" }}
                    >
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                        />
                        <Typography
                            color="#fff"
                            variant="h5"
                            fontWeight="bold"
                            p={2}
                        >
                            {title}
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ color: "#fff" }}
                            py={1}
                            px={2}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography
                                    variant={{ sm: "subtitle1", md: "h6" }}
                                    color="#fff"
                                >
                                    {channelTitle}
                                    <CheckCircle
                                        sx={{
                                            fontSize: "12px",
                                            color: "#d70e4e",
                                            ml: "5px",
                                        }}
                                    />
                                </Typography>
                            </Link>
                            <Stack
                                direction="row"
                                gap="20px"
                                alignItems="center"
                            >
                                <Typography
                                    variant="body1"
                                    sx={{ opacity: 0.7 }}
                                >
                                    {millify(parseInt(viewCount), {
                                        precision: 2,
                                    })}{" "}
                                    views
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ opacity: 0.7 }}
                                >
                                    {millify(parseInt(likeCount), {
                                        precision: 2,
                                    })}{" "}
                                    likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    px={2}
                    py={{ md: 1, xs: 5 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;
