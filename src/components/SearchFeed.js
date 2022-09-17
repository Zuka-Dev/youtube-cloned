import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";
import { Videos } from "./";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();
    useEffect(() => {
        fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
            setVideos(data.items)
        );
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                mb={2}
                sx={{ color: "#fff" }}
            >
                Search Results for:{" "}
                <span style={{ color: "#d70e4e" }}>{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
