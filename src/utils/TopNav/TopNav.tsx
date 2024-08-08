import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { ModeToggle } from "./components/mode-toggle";

export default function TopNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const theme = useTheme();

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="sticky" enableColorOnDark>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Typography
              variant="body1"
              style={{ color: "#1D6EB7", fontWeight: "bold" }}
              component="h2"
            >
              I am Naresh
            </Typography>
          </div>

          <ModeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
