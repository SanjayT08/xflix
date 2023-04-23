import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Searchbar from "./Searchbar";
import UploadVideo from "./Upload";
import { Link } from "react-router-dom";

const Navbar = ({ funcChange, videoDetails }) => {
  const matches = useMediaQuery("(min-width:750px)");
  return (
    <React.Fragment>
      <AppBar sx={{ bg: "primary.main" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h4" color="red">
                X
              </Typography>
              <Typography variant="h4" color="white">
                Flix
              </Typography>
            </Box>
          </Link>
          {videoDetails ? "" : matches && <Searchbar change={funcChange} />}
          <Box>
            <UploadVideo />
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
