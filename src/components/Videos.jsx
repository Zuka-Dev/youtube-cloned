import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelCard, Loader, VideoCard } from "./";
const Videos = ({ videos, direction }) => {
    if (!videos?.length) return <Loader />;

    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            sx={{ flex: "1 0 21%" }}
            gap={2}
        >
            {videos.map((item, idx) => (
                <Box key={idx} sx={{ mb: 10 }}>
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                    {item.id.videoId && <VideoCard video={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
