import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const dataHistogram = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 30 },
  { name: "D", value: 40 },
];

const dataPieChart = [
  { name: "Category A", value: 200 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 400 },
];

const dataRadarChart = [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "English", A: 98, B: 130, fullMark: 150 },
  { subject: "Physics", A: 86, B: 130, fullMark: 150 },
  { subject: "History", A: 99, B: 100, fullMark: 150 },
  { subject: "Chemistry", A: 85, B: 90, fullMark: 150 },
  { subject: "Biology", A: 65, B: 85, fullMark: 150 },
];

const dataDotChart = [
  { uv: 50, pv: 10 },
  { uv: 80, pv: 30 },
  { uv: 120, pv: 50 },
  { uv: 135, pv: 70 },
  { uv: 150, pv: 90 },
  { uv: 160, pv: 110 },
  { uv: 180, pv: 130 },
  { uv: 200, pv: 150 },
];

const dataLineChart = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const pink = "#FF005B";
const darkPink = "#C0005E";

const Graphs = () => {
  return (
    <Box mt={4}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h4" mb={4}>
            Gráficas de lectura SLR
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right" }}
            sx={{
              backgroundColor: pink,
              fontWeight: "bold",
              textTransform: "none",
              ":hover": {
                backgroundColor: darkPink,
              },
            }}
          >
            Descargar
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 16, borderRadius: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              Histogram
            </Typography>
            <BarChart width={400} height={300} data={dataHistogram}>
              <Bar dataKey="value" fill="#8884d8" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 16, borderRadius: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              Pie Chart
            </Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={dataPieChart}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 16, borderRadius: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              Radar Chart
            </Typography>
            <RadarChart
              outerRadius={90}
              width={400}
              height={300}
              data={dataRadarChart}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 16, borderRadius: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              Dot Chart
            </Typography>
            <ScatterChart width={400} height={300}>
              <XAxis dataKey="uv" />
              <YAxis dataKey="pv" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="A Scatter" data={dataDotChart} fill="#8884d8" />
            </ScatterChart>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} >
          <Paper elevation={3} style={{ padding: 16, borderRadius: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              Line Chart
            </Typography>
            <LineChart width={800} height={300} data={dataLineChart}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              <Line type="monotone" dataKey="amt" stroke="#ffc658" />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Graphs;
