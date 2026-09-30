"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Welcome to TrailSense
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        Map integration comes next.
      </Typography>
    </Box>
  );
}
