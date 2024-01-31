import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  Grid,
  Box,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const One = () => {
  const pink = "#FF005B";
  const darkPink = "#C0005E";
  const databases = [
    {
      name: "Scopus",
      description:
        "Scopus es una base de datos multidisciplinaria con resúmenes y citas de artículos de revistas científicas.",
    },
    {
      name: "Web of Science",
      description:
        "Web of Science ofrece acceso a citas de investigación y enlaces a textos completos en diversas disciplinas científicas.",
    },
    {
      name: "PubMed",
      description:
        "PubMed es una base de datos gratuita de la literatura en ciencias de la vida y artículos biomédicos.",
    },
    {
      name: "ERIC",
      description:
        "ERIC proporciona acceso a una amplia gama de información relacionada con la educación.",
    },
    {
      name: "IEEE Xplore",
      description:
        "IEEE Xplore es una biblioteca digital que ofrece acceso a publicaciones técnicas en ingeniería y tecnología.",
    },
    {
      name: "Science Direct",
      description:
        "Science Direct es una plataforma líder de literatura científica y técnica que cubre una amplia gama de temas.",
    },
    {
      name: "JSTOR",
      description:
        "JSTOR proporciona acceso a miles de revistas académicas, libros y fuentes primarias en diversas disciplinas.",
    },
  ];

  return (
    <>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Toolbar>
          <img
            src="assets/logo/prisma-logo.png"
            alt="prisma-logo"
            style={{ maxWidth: "4%", margin: "1rem 2rem" }}
          />
          <Box style={{ flexGrow: 1 }}></Box>
          <Button
            sx={{
              backgroundColor: pink,
              fontWeight: "bold",
              textTransform: "none",
              color: "white",
              marginRight: "2rem",
              padding: "0.5rem 2rem",
              borderRadius: "1rem",

              ":hover": {
                backgroundColor: darkPink,
              },
            }}
          >
            Registro
          </Button>
          <Button
            sx={{
              backgroundColor: pink,
              fontWeight: "bold",
              textTransform: "none",
              color: "white",
              marginRight: "2rem",
              padding: "0.5rem 1rem",
              borderRadius: "1rem",

              ":hover": {
                backgroundColor: darkPink,
              },
            }}
          >
            Iniciar Sesión
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ margin: "3rem 5rem" }}>
        <Typography variant="h2" gutterBottom>
          Método SLR: Revisión Sistemática de Literatura
        </Typography>
        <Typography variant="body1" paragraph>
          El método SLR es una técnica esencial para validar documentos
          académicos...
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Instrucciones para Búsquedas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Aquí se explican los pasos detallados para realizar búsquedas...
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Bases de Datos
          </Typography>
          <Grid container spacing={2}>
            {databases.map((database, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: "1rem",
                    boxShadow:
                      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                    padding: "0.5rem",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {database.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {database.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box my={4}>
          <Typography variant="h5">Ejemplos de Búsquedas</Typography>
          {/* Inserta aquí imágenes o capturas de pantalla */}
        </Box>
      </Box>
    </>
  );
};

export default One;
