import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DropFile from "./DropFile";
import Button from "@mui/material/Button";

const Home = () => {
  const pink = "#FF005B";
  const darkPink = "#C0005E";
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Herramienta SLR
      </Typography>
      <Typography variant="body1" paragraph sx={{ paddingBottom: "3rem" }}>
        Welcome to the file upload page! Please select your files using the
        forms below.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 16, borderRadius: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              ARCHIVO SCOPUS
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Ingrese su archivo SCOPUS en formato .xlsx
            </Typography>
            {/* Home component with file input for Form 1 */}
            <div style={{ marginLeft: "8rem" }}>
              <DropFile
                onFileChange={(files) => console.log("Form 1 files:", files)}
              />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 16, borderRadius: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              ARCHIVO WOS
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Ingrese su archivo WOS en formato .csv
            </Typography>
            {/* Home component with file input for Form 2 */}
            <div style={{ marginLeft: "8rem" }}>
              <DropFile
                onFileChange={(files) => console.log("Form 2 files:", files)}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>

      {/* Beautiful Submit Button */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: pink,
            fontWeight: "bold",
            textTransform: "none",
            padding: "0.5rem 4rem",
            ":hover": {
              backgroundColor: darkPink,
            },
          }}
        >
          Ejecutar SLR
        </Button>
      </div>
    </Box>
  );
};

export default Home;
