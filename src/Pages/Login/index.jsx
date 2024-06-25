import styled from "styled-components";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Container = styled.div`
    background-color: #C2C2C2;
    width: 100%;
    height: 100vh;
    color: black;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => props.style}

    @media(min-width: ${(props) => props.breakpoints.small}){
        flex-direction: row;
    }
`;

const Logo = styled.div`
    font-size: 1.5rem;
    color: white; 
    ${(props) => props.style}
`;

const Form = styled.div`
    background-color: #E2E2E2;
    width: 100%;
    height: 75vh;
    align-items: center;
    ${(props) => props.style}
   
    @media(min-width: ${(props) => props.breakpoints.small}){
        flex-direction: row;
        justify-content: space-between;
        width: 70%;
    }
`;


const Login = (props) => {
    return <>
        <Container breakpoints={props.breakpoints} >
            
            <Form breakpoints={props.breakpoints}>

                <Logo style={{color: 'black'}}>{props.LogoTitle}</Logo>
                
                <TextField label="Email" variant="outlined" />
                <TextField label="Senha" variant="outlined" />

            </Form>

        </Container>
    </>
};

export default Login;