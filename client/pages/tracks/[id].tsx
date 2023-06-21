import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

const TrackPage = () => {

    const track: ITrack = {_id: '1', name: 'song 1', artist: 'artist 1', text: 'text 1', listens: 0, picture: 'picture 1', audio: 'audio 1', comments: [{_id: '1', username: "Username 1", text: 'Lorem ipsum'}]}
    const router = useRouter();

    return (
        <MainLayout>
            <Button 
                variant={'outlined'}
                style={{fontSize: 20}}
                onClick={() => router.push('/tracks')}
            >
                Get back to the list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{margin: '0 20px'}}>
                    <h1>Track name - {track.name}</h1>
                    <h1>Track artist - {track.artist}</h1>
                    <h1>Listens - {track.listens}</h1>
                </div>
            </Grid>
            <div>Songs text</div>
            <p>{track.text}</p>
            <div>Comments:</div>
            <Grid container>
                <TextField
                    style={{marginTop: 10}}
                    label='Your name'
                    fullWidth
                />
                <TextField
                    style={{marginTop: 10}}
                    label='Your comment'
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button style={{marginTop: 10}}>Send</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Author - {comment.username}</div>
                        <div>Comment : {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;