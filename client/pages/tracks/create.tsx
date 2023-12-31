import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import FileUpload from '../../components/FileUpload';
import {useInput} from "../../hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";


const Create = () => {
    const router = useRouter();

    const [activeStep, setActiveStep] = useState(0)

    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('artist', artist.value);
            formData.append('text', text.value);
            formData.append('audio', audio);
            formData.append('picture', picture);
            axios.post('http://localhost:5000/tracks', formData)
                .then(resp => router.push('/tracks'))
                .catch(e => console.log(e.message))
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout title={'Add new song'}>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && 
                    <Grid container direction='column' style={{padding: '0px 20px 20px 20px'}}>
                        <h2 style={{textAlign: 'center'}}>Step 1</h2>
                        <TextField
                            {...name}
                            label={'Songs name'}
                        />
                        <TextField
                            {...artist}
                            style={{marginTop: 10}}
                            label={'Artist name'}
                        />
                        <TextField
                            {...text}
                            style={{marginTop: 10}}
                            label={'Songs text'}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <Grid container direction='column' style={{padding: '0px 20px 20px 20px', justifyContent: 'center', alignItems: 'center'}}>
                        <h2 style={{textAlign: 'center'}}>Step 2</h2>
                        <FileUpload setFile={setPicture} accept='image/*'>
                            <Button>Set songs picture</Button>
                        </FileUpload>
                    </Grid>
                    

                }
                {activeStep === 2 && 
                    <Grid container direction='column' style={{padding: '0px 20px 20px 20px', justifyContent: 'center', alignItems: 'center'}}>
                        <h2 style={{textAlign: 'center'}}>Step 3</h2>
                        <FileUpload setFile={setAudio} accept='audio/*'>
                            <Button>Set songs audio</Button>
                        </FileUpload>
                    </Grid>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Go back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;