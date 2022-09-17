import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchApi } from "../utils/fetchApi";
import { SideBar, Videos } from "./";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
            setVideos(data.items)
        );
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sm: "auto", md: "92vh" },
                    borderRight: "1px solid #281547",
                    px: { sm: 0, md: 2 },
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{ mt: 1.5, color: "#fff" }}
                >
                    Copyright 2022 ManLikeZuka
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: "#fff" }}
                >
                    {selectedCategory}{" "}
                    <span style={{ color: "#d70e4e" }}>Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
