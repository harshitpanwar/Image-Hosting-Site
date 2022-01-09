import React from "react";
import { Container, AppBar, Typography, Grow, Grid, Icon } from '@material-ui/core'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import icon from './images/icon.png';
import useStyles from './styles';
import Header from "./components/Header/Header";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    const classes = useStyles();
    return (

        <BrowserRouter>
        
        <Header/>

            <Routes>


            <Route path='/' element={<Posts/>}/>

            <Route path='/upload' element={<Form/>} exact/>


            </Routes>

  

      </BrowserRouter>
    );
}

export default App;