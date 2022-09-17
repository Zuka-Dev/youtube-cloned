import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    };
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #281547",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 5 },
            }}
        >
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: "10px", color: "#cb0141" }}>
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
