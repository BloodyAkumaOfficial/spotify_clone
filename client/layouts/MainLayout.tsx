import Navbar from "../components/Navbar";
import { FC, PropsWithChildren } from "react";
import {Container} from '@mui/material'
import Player from '../components/PLayer';
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({children, title, description}) => {
    return (
        <>
            <Head>
                <title>{`${title} | Spotify clone` || 'Music platform'}</title>
                <meta name='description' content={'Spotify clone ' + description}/>
                <meta name='robots' content='index, follow'/>
                <meta name='viewport' content='widht=device-width, initial-scale=1'/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container> 
            <Player/>
        </>
    );
}

export default MainLayout;