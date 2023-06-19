import { ITrack } from '@/types/track';
import React from 'react';
import { Card, IconButton, Grid } from '@mui/material'
import { Pause, PlayArrow, Delete } from '@mui/icons-material'

interface TrackItemProps {
    track: ITrack;
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {

    return (
        <Card style={{margin: 20, padding: 10, display: 'flex', alignItems: 'center'}}>
            <IconButton>
                {active ?
                    <Pause/>
                :
                    <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{track.artist}</div>
                {active && <div>02:42 / 03:54</div>}
                <IconButton style={{marginLeft: 'auto'}}>
                    <Delete/>
                </IconButton>
            </Grid>
        </Card>
    );
};

export default TrackItem;