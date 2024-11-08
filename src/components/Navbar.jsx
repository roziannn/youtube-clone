import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
import YtLogo from "../utils/ytLogo.jpg";

import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" p={2} sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between", zIndex: 1000 }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={YtLogo} alt="logo" height={30} />
    </Link>
    <Box sx={{ mt: { xs: 2, sm: 0 } }}>
      <SearchBar />
    </Box>
  </Stack>
);

export default Navbar;
