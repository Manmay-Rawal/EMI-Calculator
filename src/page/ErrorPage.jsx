import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate =  useNavigate();
  const navigation = {
    pages: [{ name: "HOME", path: "/EMI-Calculator/" }],
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2, 
      }}
    >
      <Grid>
        <Typography sx={{ fontSize: "2.75rem", mb: 3 }}>
          Something went wrong in the application.
        </Typography>
        {navigation.pages.map((page) => (
          <Button
            variant="contained"
            color="primary"
            key={page.name}
            onClick={()=>navigate(page.path)}
          >
            Go Home
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default ErrorPage;
