import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import {GetServerSideProps} from "next";
import axios from "axios";
import {useInput} from "../../hooks/useInput";
import {ITrack} from "../../types/track";

const TrackPage = ({serverTrack}) => {

    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();

    const username = useInput('');
    const text = useInput('');
    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <MainLayout title={`${track.name}`}>
            <Button 
                variant={'outlined'}
                style={{fontSize: 20}}
                onClick={() => router.push('/tracks')}
            >
                Get back to the list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/>
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
                    {...username}
                    style={{marginTop: 10}}
                    label='Your name'
                    fullWidth
                />
                <TextField
                    {...text}
                    style={{marginTop: 10}}
                    label='Your comment'
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={addComment} style={{marginTop: 10}}>Send</Button>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)

    return {
        props: {
            serverTrack: response.data
        }
    }
}