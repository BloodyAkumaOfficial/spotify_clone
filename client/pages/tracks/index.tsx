import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import {useRouter} from 'next/router'
import { ITrack } from '@/types/track';
import TrackList from '@/components/TrackList';

const TracksPage = () => {

    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'song 1', artist: 'artist 1', text: 'text 1', listens: 0, picture: 'picture 1', audio: 'audio 1', comments: []},
        {_id: '2', name: 'song 2', artist: 'artist 2', text: 'text 2', listens: 0, picture: 'picture 2', audio: 'audio 2', comments: []},
        {_id: '3', name: 'song 3', artist: 'artist 3', text: 'text 3', listens: 0, picture: 'picture 3', audio: 'audio 3', comments: []}
    ];

    return (
        <>
            <MainLayout>
                <Grid container justifyContent='center'>
                    <Card style={{ width: 900 }}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between'>
                                <h1>Songs list</h1>
                                <Button onClick={() => router.push('/tracks/create')}>Download</Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks}/>
                    </Card>
                </Grid>
            </MainLayout>
        </>
    );
}

export default TracksPage