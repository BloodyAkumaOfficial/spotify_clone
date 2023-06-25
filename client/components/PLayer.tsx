import React, {useEffect} from 'react';
import { IconButton, Grid } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import TrackProgress from '@/components/TrackProgress';
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useAction} from "@/hooks/useAction";


let audio: HTMLMediaElement;
const Player = () => {

    const {pause, active, volume, duration, currentTime} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setActiveTrack, setDuration, setCurrentTime} = useAction()

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = volume / 100;
            // @ts-ignore
            audio.onloadeddata(() => {
                setDuration(Math.ceil(audio.duration))
            })
            // @ts-ignore
            audio.ontimeupdate(() => {
                setCurrentTime(Math.ceil(audio.currentTime))
            })
        }
    }

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

    if (!active) {
        return null;
    }

    return (
        <>
            <div className='player'>
                <IconButton onClick={play}>
                    {!pause ?
                        <Pause/>
                    :
                        <PlayArrow/>
                    }
                </IconButton>
                <Grid container direction='column' style={{width: 600, margin: '0 20px'}}>
                    <div>{active?.name}</div>
                    <div style={{fontSize: 12, color: 'grey'}}>{active?.artist}</div>
                </Grid>
                <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
                <VolumeUp style={{marginLeft: 'auto'}}/>
                <TrackProgress left={volume} right={100} onChange={changeVolume}/>
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