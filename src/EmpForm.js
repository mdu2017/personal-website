import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import {useState} from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));



const LayoutTextFields = () => {
  const classes = useStyles();

  const [popupOpen, setPopupOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Employee ID"
        //   style={{ margin: 8 }}
          placeholder="Employee ID"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Calculate pay button */}
        <Button variant="contained" color="primary" onClick={() => setPopupOpen(true)}>
          Calculate Pay
        </Button>

          {/*  Displays popup button if calculate pay is clicked */}
        { popupOpen === true ?
        <Snackbar open={true} autoHideDuration={6000} onClose={() => setPopupOpen(false)}>
            <Alert onClose={() => setPopupOpen(false)} severity="info">
                This is a success message!
            </Alert> 
        </Snackbar>
        : console.log('Nothing')}
      </div>
    </div>
  );
}

export default LayoutTextFields;
