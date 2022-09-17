import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sm: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
    >
        {categories.map((category) => (
            <button
                className="category-btn"
                style={{
                    background: category.name === selectedCategory && "#281547",
                    color: "#d70e4e",
                }}
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
            >
                <span
                    style={{
                        color:
                            category.name === selectedCategory
                                ? "#d70e4e"
                                : "#4a2783",
                        marginRight: "15px",
                    }}
                >
                    {category.icon}
                </span>
                <span
                    style={{
                        opacity:
                            category.name === selectedCategory ? "1" : "0.75",
                    }}
                >
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
);

export default SideBar;
