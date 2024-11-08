import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

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
    <Paper component="form" onSubmit={handleSubmit} sx={{ borderRadius: 20, backgroundColor: "#121212", border: "1px solid #131131", pl: 2, boxShadow: "none", mr: { sm: 5 } }}>
      <input className="search-bar" style={{ width: window.innerWidth < 600 ? "280px" : "350px" }} placeholder="Search here..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
