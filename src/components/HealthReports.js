import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, AreaChart, Area, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter, ResponsiveContainer, Cell } from 'recharts';
import { useTheme, useMediaQuery } from '@mui/material';

// Custom colors for Pie chart
const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042'];

const HealthReports = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile detection

  // Data for steps taken in a week
  const stepsData = [
    { name: 'Mon', steps: 3000 },
    { name: 'Tue', steps: 5000 },
    { name: 'Wed', steps: 7000 },
    { name: 'Thu', steps: 5500 },
    { name: 'Fri', steps: 8000 },
    { name: 'Sat', steps: 12000 },
    { name: 'Sun', steps: 10000 },
  ];

  // Data for cholesterol levels
  const cholesterolData = [
    { name: 'You', value: 180 },
    { name: 'Average Population', value: 200 },
  ];

  // Data for blood test results
  const bloodTestData = [
    { name: 'Hemoglobin', value: 13.5 },
    { name: 'WBC', value: 7.2 },
    { name: 'Platelets', value: 250000 },
  ];

  // Data for daily calories intake
  const caloriesData = [
    { name: 'Mon', calories: 2200 },
    { name: 'Tue', calories: 2300 },
    { name: 'Wed', calories: 2100 },
    { name: 'Thu', calories: 2500 },
    { name: 'Fri', calories: 2700 },
    { name: 'Sat', calories: 2900 },
    { name: 'Sun', calories: 2000 },
  ];

  // Data for fitness metrics (radar chart)
  const fitnessData = [
    { subject: 'Strength', A: 80, B: 90, fullMark: 100 },
    { subject: 'Cardio', A: 85, B: 95, fullMark: 100 },
    { subject: 'Flexibility', A: 90, B: 85, fullMark: 100 },
    { subject: 'Endurance', A: 70, B: 80, fullMark: 100 },
  ];

  // Data for weight vs body fat % (scatter plot)
  const weightData = [
    { weight: 150, fat: 20 },
    { weight: 160, fat: 22 },
    { weight: 155, fat: 18 },
    { weight: 165, fat: 24 },
    { weight: 170, fat: 25 },
  ];

  return (
        <Grid container spacing={3}>
            {/* Steps Taken Chart */}
            <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Steps Taken (This Week)
                </Typography>
                <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
                    <LineChart data={stepsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="steps" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                </CardContent>
            </Card>
            </Grid>

            {/* Cholesterol Level Chart */}
            <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Cholesterol Levels
                </Typography>
                <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
                    <BarChart data={cholesterolData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                </CardContent>
            </Card>
            </Grid>

            {/* Daily Calories Intake */}
            <Grid item xs={12}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Daily Calories Intake
                </Typography>
                <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
                    <AreaChart data={caloriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="calories" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </ResponsiveContainer>
                </CardContent>
            </Card>
            </Grid>

            {/* Fitness Metrics (Radar Chart) */}
            <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Fitness Metrics
                </Typography>
                <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={fitnessData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="My Fitness" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Average Fitness" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
                </CardContent>
            </Card>
            </Grid>

            {/* Weight vs Body Fat (Scatter Chart) */}
            <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Weight vs Body Fat %
                </Typography>
                <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
                    <ScatterChart>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="weight" name="Weight" />
                    <YAxis type="number" dataKey="fat" name="Body Fat %" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Health Data" data={weightData} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
                </CardContent>
            </Card>
            </Grid>

            {/* Blood Test Results */}
            <Grid item xs={12}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Blood Test Results
                </Typography>
                <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
                    <PieChart>
                    <Pie
                        data={bloodTestData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={isMobile ? 60 : 100}
                        fill="#8884d8"
                        label
                    >
                        {bloodTestData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
  );
};

export default HealthReports;
