import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import SubmitButton from './SubmitButton'
import {render} from "@testing-library/react";

class EnterText extends React.Component {
    render() {
        return (

            <form >
                <Grid item xs={12}>
                    <TextField fullWidth multiline variant='outlined' className='text-entry' placeholder='Enter text here...' />
                </Grid>

                <SubmitButton />
            </form>
        );
    }
}

export default EnterText;