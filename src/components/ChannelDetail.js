import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";
import { ChannelCard, Videos } from "./";
const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
            setChannelDetail(data?.items[0])
        );

        fetchApi(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data?.items)
        );
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,2,58,1) 9%, rgba(0,34,69,1) 100%)",
                        zIndex: 10,
                        height: "300px",
                    }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ m: { sm: "70px" } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;
