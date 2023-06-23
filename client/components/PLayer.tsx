import React from 'react';
import { IconButton, Grid } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import TrackProgress from '@/components/TrackProgress';
import { ITrack } from '@/types/track';

const Player = () => {

    const active = true
    const track: ITrack = {_id: '1', name: 'song 1', artist: 'artist 1', text: 'text 1', listens: 0, picture: 'picture 1', audio: 'audio 1', comments: [{_id: '1', username: "Username 1", text: 'Lorem ipsum'}]}

    return (
        <>
            <div className='player'>
                <IconButton onClick={e => e.stopPropagation()}>
                    {active ?
                        <Pause/>
                    :
                        <PlayArrow/>
                    }
                </IconButton>
                <Grid container direction='column' style={{width: 600, margin: '0 20px'}}>
                    <div>{track.name}</div>
                    <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
                </Grid>
                <TrackProgress left={0} right={100} onChange={() => ({})}/>
                <VolumeUp style={{marginLeft: 'auto'}}/>
                <TrackProgress left={0} right={100} onChange={() => ({})}/>
            </div>
            <style jsx>
            {`
                .player {
                    height: 60px;
                    width: 100%;
                    position: fixed;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                    background-color: lightgray;
                }
            `}
            </style>
        </>
    );
}

export default Player;