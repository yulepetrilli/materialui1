import React from 'react';
import { Typography, CardContent, Grid } from '@mui/material';

//Styles
import { CardWrapper, Image } from './Styles';

export default function CatCard({name, description, img}) {
    const reducedDescription = description.substring(0, description.indexOf('.') + 1) ;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <CardWrapper sx={{ mb: 2}}>
                <Image image={img} title={name}/>
                <CardContent>
                    <Typography gutterBottom variant='h6'>
                        {name}
                    </Typography>
                    <Typography align='justify' >
                        {reducedDescription}
                    </Typography>
                </CardContent>
            </CardWrapper>
        </Grid>
    )
}
