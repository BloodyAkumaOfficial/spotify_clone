import Navbar from "../components/Navbar";
import { FC, PropsWithChildren } from "react";
import {Container} from '@mui/material'
import Player from '../components/PLayer';


const MainLayout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container> 
            <Player/>
        </>
    );
}

export default MainLayout;