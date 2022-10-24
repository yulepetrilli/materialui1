import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';

//Styles
import { Heading, ContentWrapper } from './Styles';

//Components
import CatCard from './CatCard';
import Pages from './Pages';

export default function Content() {
    const [catsList, setCatsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [catsPerPage] = useState(12);

    const fetchData = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/breeds') 
        const data = await response.json();
        setCatsList(data)
    };

    useEffect(() => {
        fetchData()
    }, []);

    const indexOfLastCat = currentPage * catsPerPage;
    const indexOfFirstCat = indexOfLastCat - catsPerPage;
    const currentCats = catsList?.slice(indexOfFirstCat, indexOfLastCat);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log(currentCats)
    return (
        <main>
            <Heading>
                <Container maxWidth='sm'>
                    <Typography 
                        variant='h3'
                        align='center'
                        color='textPrimary'
                        gutterBottom
                    >
                        CAT SPECIES GALLERY
                    </Typography>
                    <Typography 
                        variant='h6'
                        align='center'
                        color='textSecondary'
                        paragraph
                    >
                        Lots of cats for your viewing pleasure.
                    </Typography>
                </Container>    
            </Heading>
            <ContentWrapper maxWidth='md' >
                <Grid container spacing={10} aling='center' >
                    {
                        currentCats?.map((cat, i) => (
                            <CatCard 
                                key={i}
                                name={cat.name}
                                description={cat.description}
                                img={cat?.image?.url}
                            />
                        ))
                    }
                </Grid>
            </ContentWrapper>
            <Pages 
                catsPerPage={catsPerPage}
                total={catsList?.length}
                paginate={paginate}
            />
        </main> 
    )
}
