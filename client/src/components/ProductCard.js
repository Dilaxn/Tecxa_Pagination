import React, { useState } from 'react';
import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import {Tooltip} from "@material-ui/core";
import styled from 'styled-components';

const StyledProductCard = styled(Grid)`
  height: 500px;
  width: 100%;
  padding: 20px;
  margin-top: 15px;
`;

const StyledTitle = styled(Typography)`
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  color: #0b4ac6;
  font-size: x-large;
`;

const StyledCard = styled(Card)`
  width: 100%;
`;

const StyledDescription = styled(Typography)`
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 3px 0px;
  color: #4e4c4c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleClick = () => {
        setIsClicked(true);
    };
    const handleClose = () => {
        setIsClicked(false);
    };



    return (
        <StyledProductCard xs={12} container>
            <StyledCard style={{ width : '100%'}}>
                <CardMedia
                    component="img"
                    height="160"
                    image={product.thumbnail}
                    alt={product.title}
                    style={{ objectFit: 'cover' }}
                    onClick={handleClick}
                />
                <CardContent>
                    <StyledTitle variant="h6">
                        {product.title}
                    </StyledTitle>
                    <Tooltip title={product.description}>
                    <StyledDescription variant="body2">
                        {product.description.length > 75 ? product.description.slice(0, 75) + '...' : product.description}
                    </StyledDescription>
                    </Tooltip>
                    {/* <hr/> */}

                    <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'center',  marginBottom: '5px', color:'rgb(255 89 0)', fontSize:'x-large' }}>
                        ${product.price}
                    </Typography>

                    <Grid container xs={12} >
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1" style={{marginLeft:"15px" , fontWeight:'bold' }}>Discount</Typography>
                        </Grid>
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1"  style={{marginLeft:"15px" ,   color:'#4e4c4c' }}>{product.discountPercentage}%</Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} >
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1" style={{marginLeft:"15px" , fontWeight:'bold' }}>Rating</Typography>

                        </Grid>
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)' , display: 'flex', alignItems: 'center' }}>
                            {/* <Typography variant="subtitle1"  style={{marginLeft:"15px" ,   color:'#4e4c4c' }}>{product.rating}</Typography> */}
                            <Rating
                                name="star-rating"
                                style={{marginLeft:"15px" , fontSize: 'medium' }}
                                value={product.rating}
                                precision={0.1}
                                readOnly
                            />
                        </Grid>
                    </Grid>
                    <Grid container xs={12} >
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1" style={{marginLeft:"15px" , fontWeight:'bold' }}>Stock</Typography>
                        </Grid>
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1"  style={{marginLeft:"15px" ,   color:'#4e4c4c' }}>{product.stock}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} >
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1" style={{marginLeft:"15px" , fontWeight:'bold' }}>Brand</Typography>
                        </Grid>
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1"  style={{marginLeft:"15px" ,   color:'#4e4c4c' }}>{product.brand}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} >
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1" style={{marginLeft:"15px" , fontWeight:'bold' }}>Category</Typography>
                        </Grid>
                        <Grid item xs={6} style={{ boxShadow:'-1px 0 0 0 rgba(0, 0, 0, 0.3)'}}>
                            <Typography variant="subtitle1"  style={{marginLeft:"15px" ,   color:'#4e4c4c' }}>{product.category}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </StyledCard>
            {isClicked && (
                <>
                    <Box
                        position="fixed"
                        top={0}
                        left={0}
                        zIndex={2}
                        width="100%"
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        backdropFilter="blur(15px)"
                        backgroundColor="rgba(0, 0, 0, 0.6)"
                    >
                        <Box position="relative">
                            <Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false}>
                                {product.images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={product.title} style={{ maxHeight: '80vh', maxWidth: '80vw' }} />
                                    </div>
                                ))}
                            </Carousel>
                            <Box
                                position="absolute"
                                top={0}
                                right={0}
                                zIndex={3}
                                padding={1}
                            >
                                <CloseIcon style={{ color: '#fff', cursor: 'pointer' }} onClick={handleClose} />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        position="fixed"
                        top={0}
                        left={0}
                        zIndex={1}
                        width="100%"
                        height="100%"
                        backgroundColor="transparent"
                        onClick={handleClose}
                    ></Box>
                </>
            )}
        </StyledProductCard>
    );
};



export default ProductCard;
