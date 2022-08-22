import React from 'react';
import { Grid } from '@material-ui/core';


import Product from './SingleProduct/Product';
import useStyles from './styles';


import { AssessmentTwoTone } from '@material-ui/icons';


const products = [
    { id: 1, name: 'SHOES', description: 'Running Shoes', price:'$25', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80'   },
    { id: 2, name: 'HATS', description: 'Computer Macbook', price:'$50', image: 'https://fanatics.frgimages.com/los-angeles-dodgers/mens-new-era-royal-los-angeles-dodgers-2022-city-connect-9fifty-snapback-adjustable-hat_pi4625000_ff_4625055-d2c0e2041ffd6a61a9d5_full.jpg?_hv=2&w=340'},
    
];

const Products = () => {
    const classes = useStyles();

    return(
    <main className={classes.content}> 
        
        <div className={classes.toolbar} />

        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={6} lg={3}>
                    
                    <Product product={product} />
                    </Grid>
            ))}

        </Grid>
    </main>

        
    );

}
export default Products