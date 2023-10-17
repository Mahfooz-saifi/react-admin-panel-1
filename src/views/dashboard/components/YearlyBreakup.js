import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, } from '@mui/material';

import DashboardCard from '../../../components/shared/DashboardCard';

const YearlyBreakup = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  // const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 290,
    },
    colors: ['#f48fb1', primary, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '65%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart = [20, 30, 25];

  return (
    <DashboardCard title="Customers" subtitle="Customers buy products" >
      <Grid container spacing={3}>
              <Grid item xs={6} sm={6} alignItems="center">
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="226px"
            width="190px"
          />
        </Grid>
      </Grid>
      
    </DashboardCard>
    
  );
};

export default YearlyBreakup;
