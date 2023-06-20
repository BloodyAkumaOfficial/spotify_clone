import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Grid } from '@mui/material';

const AlbumPage = () => {
    return (
        <>
            <MainLayout>
                <Grid container justifyContent='center'>
                    Albums Page
                </Grid>
            </MainLayout>
        </>
    );
}

export default AlbumPage;