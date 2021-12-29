import React from "react";
import { Container, AppBar, Typography, Grow, Grid, Icon } from '@material-ui/core'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import icon from './images/icon.png';
import useStyles from './styles';
import Header from "./components/Header/Header";
import './App.css'

const App = () => {
    const classes = useStyles();
    return (
      <div className="container" maxwidth="lg">

          <Header/>

          {/* <AppBar className={classes.appBar} position="static" color="inherit">
          <img className={classes.image} src={icon} alt="image hosting icon" height="60px" width="60px"/>
              <Typography className={classes.heading} variant="h3" align="center">Image Hosting Site</Typography>
          </AppBar> */}
        {/* <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}> */}
                        <Posts />
                    {/* </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow> */}
      </div>  
    );
}

export default App;