import React from 'react';
import { Box, Typography } from '@mui/material';
import Profile from '../header/Profile';
export const Upgrade = () => {
    return (
        <Box
            display={'flex'}
            alignItems="center"
            gap={2}
            sx={{ mx: 1, mt:20,  bgcolor: `${'primary.light'}`, borderRadius: '8px' }}
        >
            <>

            <Box>
                    
                    <Profile />
                    
                    </Box>
                <Box>
                    <Typography>Mahfooz saifi</Typography>
                                        </Box>
           
            </>
        </Box>
    );
};
