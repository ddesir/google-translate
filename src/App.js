import React from 'react';
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import EnterText from './components/EnterText';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toTranslate: {
                value: ''
            },
            translated: {
                value: ''
            }
        };
    }

    submitForm(event) {
        event.preventDefault();


    }
  render() {
    return (
        <Grid container justify='center' spacing={4}>
            <Container maxWidth='lg'>
                <Grid item xs={12}>
                  <Typography variant='h2'>
                    Translator
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <EnterText />


            </Container>
        </Grid>
    );
  }
}

export default App;
