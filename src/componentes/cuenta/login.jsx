import { useState } from 'react';
import {Box, TextField, Button, styled, Typography} from '@mui/material';
import { API } from '../../service/api';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 200,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: green;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;


const signupInitialValues = {
    nombre:'',
    nombreusuario:'',
    contrasena:''
}

const Login = ()=>{

    const imagenn = 'https://static.vecteezy.com/system/resources/thumbnails/011/635/825/small/abstract-square-interface-modern-background-concept-fingerprint-digital-scanning-visual-security-system-authentication-login-vector.jpg';

    const [account, toggleAcount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues)
    const [error, setError] = useState('');

    const toggleSignup = ()=>{
        account === 'signup' ? toggleAcount('login') : toggleAcount('signup');
    }

    const onInputChange = (e) => {
        console.log("Input changed:", e.target.name, e.target.value);
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };
    

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if(response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleAcount('login')
        } else {
            setError('algo salio mal, intenta de nuevo despues');
        }
    }
    
    

    return(
        <Component>
            <Box>
            <Image src={imagenn} alt="lg"/>
            {
                account === 'login' ?
                <Wrapper>
                        <TextField variant="standard" label="usuario"/>
                        <TextField variant="standard" label="contrasena"/>

                        {error && <Error>{error}</Error>}

                        <LoginButton variant="contained">Login</LoginButton>
                        <SignupButton onClick={toggleSignup}>Crear una cuenta</SignupButton>
                    </Wrapper>
                :

                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='nombre' label="nombre"/>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='nombreusuario' label="nombre de usuario"/>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='contrasena' label="contraseña"/>
                        
                        {error && <Error>{error}</Error>}

                        <SignupButton onClick={() => signupUser()} >Resgistrarse</SignupButton>
                        <LoginButton variant='contained' onClick={toggleSignup}>Tienes una cuenta</LoginButton>
                    </Wrapper>
            }  
            </Box>
        </Component>
    )
}

export default Login;