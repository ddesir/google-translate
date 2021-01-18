import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class SubmitButton extends React.Component {
    render(){
        return (
            <Grid item xs={12}>
                <Button type="submit" variant='contained' color='primary'>Translate</Button>
            </Grid>
        );
    }
}

export default SubmitButton;