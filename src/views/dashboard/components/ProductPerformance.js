import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import img1 from 'src/assets/images/backgrounds/bamboo-watch.jpg';
import { InputText } from "primereact/inputtext";
const products = [
    {
        // id: "img1",
        name: "Abstract 3D",
        post: "Lorem ipsum, or lipsum as it is sometimes known,",
        Stoke: "32 in stoke",
        price: "45.99",
        sale: "25"
    
    },
    {
        name: "Surfens Illustration",
        post: "Lorem ipsum, or lipsum as it is sometimes known,",
        Stoke: "36 in stoke",
        price: "24.5",
        sale: "24"
    },
 ];


const ProductPerformance = () => {
    return (

        <DashboardCard title="Product Sell"
        action={
            <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="text" style={{width:'140px', height:'35px'}} className="p-inputtext-sm" placeholder="Search" />
          </span>
          
          }
        >
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>

                
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    {/* Id */}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" ml="-64px">
                                    Product Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" >
                                    Stoke
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" >
                                    Price
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" >
                                    Total Sales
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                         <img alt="Remy Sharp" src={img1} width={50} />
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    width:"500px",
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.Stoke}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                <Typography variant="h6">${product.price}k</Typography>
                                </TableCell>
                                           <TableCell align="center">
                                    <Typography variant="">{product.sale}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
