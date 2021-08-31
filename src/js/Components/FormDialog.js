import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = (props) => {
  return (
    <div>
      <Dialog open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Favorite City</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Enter the name of the city
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            onChange={(e)=>props.setNewFavorite(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.favoriteChange} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog
