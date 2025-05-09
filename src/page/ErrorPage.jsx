import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const ErrorPage = () => {
  const navigation = {
    pages: [{ name: "HOME", href: "/Loan-calculator/" }],
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
            href={page.href}
            key={page.name}
          >
            Go Home
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default ErrorPage;
