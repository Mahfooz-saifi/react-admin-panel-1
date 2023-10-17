import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowBigTop, IconCurrencyDollar } from '@tabler/icons';
import DashboardCard from '../../../components/shared/DashboardCard';

const MonthlyEarnings = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = '#f5fcff';
  const errorlight = '#fdede8';

  // chart
  
  
  return (

        <DashboardCard
      title="Earnings"
      action={
        <Fab color="secondary" size="medium" sx={{color: '#ffffff'}}>
          <IconCurrencyDollar width={24} />
        </Fab>
      }
      
    >
      
      {/* <> */}
      
        <Typography variant="h4" fontWeight="700" mt="-40px">
          $198k
        </Typography>
        <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 20, height: 20 }}>
            <IconArrowBigTop width={15} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            +37.8%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            this months
          </Typography>
        </Stack>
      {/* </> */}
    </DashboardCard>
  );
};

export default MonthlyEarnings;
