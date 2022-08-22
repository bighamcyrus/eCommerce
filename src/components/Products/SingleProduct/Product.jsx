import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './style';



const Product = ({ product }) => {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} title={product.name} />
        
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <img src={product.image} alt="product images" height={250} width={400} />
                <Typography variant="h5">
                    {product.price}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary"> {product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart/>
            </IconButton>

        </CardActions>
      
    </Card>
  )
}

export default Product
