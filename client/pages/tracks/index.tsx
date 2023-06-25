import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import {useRouter} from 'next/router'
import TrackList from '@/components/TrackList';
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {state} from "sucrase/dist/types/parser/traverser/base";
import {NextThunkDispatch, wrapper} from "@/store";
import {fetchTracks} from "@/store/actions-creators/track";

const TracksPage = () => {

    const router = useRouter();
    // @ts-ignore
    const {tracks, error} = useTypedSelector(state = state.track)

    if (error) {
        return (
            <MainLayout>
                <h1>error</h1>
            </MainLayout>
        );
    }

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

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks());
})