import styled from '@emotion/styled'
import { Card, CardMedia, Container, Grid } from '@mui/material';

export const Heading = styled.div`
    margin-top: 20px;
`;

export const ContentWrapper = styled(Container)`
    margin-top: 30px;
`;

export const Image = styled(CardMedia)`
    height: 200px;
    width: 300px;
`;

export const CardWrapper = styled(Card)`
    height: 420px;
    width: 300px;
`;

export const PagWrapper = styled(Grid)`
    margin-top: 15px;
    margin-bottom: 15px;
`;