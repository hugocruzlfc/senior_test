import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import Favorite from "@mui/icons-material/Favorite";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Programing Test
          </Typography>
          <IconButton
            color="secondary"
            onClick={handleClick}
          >
            <Favorite />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
