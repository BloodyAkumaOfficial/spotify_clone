import { ITrack } from '@/types/track';
import React from 'react';
import { Card, IconButton, Grid } from '@mui/material'
import { Pause, PlayArrow, Delete } from '@mui/icons-material'
import { useRouter } from 'next/router';

interface TrackItemProps {
    track: ITrack;
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = true}) => {

    const router = useRouter();

    return (
        <Card style={{margin: 20, padding: 10, display: 'flex', alignItems: 'center'}} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ?
                    <Pause/>
                :
                    <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture} style={{margin: '0 5px'}}/>
            <Grid container direction='column' style={{width: 600, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
                {active && <div>02:42 / 03:54</div>}
                <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto', alignSelf: 'center'}}>
                    <Delete/>
                </IconButton>
            </Grid>
        </Card>
    );
};

export default TrackItem;