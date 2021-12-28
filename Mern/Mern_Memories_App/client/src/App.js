import React from "react";
import { Container, AppBar, Typography, Grow, Grid, Icon } from '@material-ui/core'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import icon from './images/icon.png'

const App = () => {
    return (
      <Container maxwidth="lg">
          <AppBar position="static" color="inherit">
              <Typography variant="h1" align="center">Image Hosting Site</Typography>
              <img src={icon} alt="image hosting icon" height="70px" width="70px"/>
          </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
      </Container>  
    );
}

export default App;