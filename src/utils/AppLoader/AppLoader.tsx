import useAppState from "@/hooks/useAppState";
import ReportIcon from "@mui/icons-material/Report";
import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const AppLoader: React.FC = () => {
  const { appLoading } = useAppState();

  return (
    <>
      {appLoading.load ? (
        <Backdrop
          sx={{
            color: appLoading.color,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={appLoading.load}
        >
          <CircularProgress
            color={appLoading.color === "danger" ? "error" : "inherit"}
          />
          {appLoading.color === "danger" && <ReportIcon color="error" />}
        </Backdrop>
      ) : null}
    </>
  );
};

export default AppLoader;
