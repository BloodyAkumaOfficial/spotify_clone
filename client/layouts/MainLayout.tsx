import Navbar from "@/components/Navbar";
import { FC, PropsWithChildren } from "react";
import {Container} from '@mui/material'


const MainLayout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container> 
        </>
    );
}

export default MainLayout;