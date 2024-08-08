import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { ModeToggle } from "./components/mode-toggle";

export default function TopNav() {
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
