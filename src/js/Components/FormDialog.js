import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {connect} from 'react-redux'
import {
  addFavoriteCity,
  addModeOff,
  changeFavoriteCity,
  changeModeOff,
} from '../Redux/actions'

const FormDialog = (props) => {
  const [newFavorite, setNewFavorite] = useState('')
  const {
    open,
    favorites,
    changeMode,
    addMode,
    idCardFavorite,
    setOpenFormDialog,
    changeFavoriteCity,
    addModeOff,
    changeModeOff,
    addFavoriteCity,
  } = props

  const enterCity = () => {
    if (changeMode) {
      changeFavoriteCity(favorites, idCardFavorite, newFavorite)
      changeModeOff()
    }
    if (addMode) {
      addFavoriteCity(favorites, newFavorite)
      addModeOff()
    }
    setOpenFormDialog(false)
  }

  return (
    <div>
      <Dialog open={open}
        onClose={()=>setOpenFormDialog(false)}
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
            defaultValue={changeMode ? favorites[idCardFavorite].content : ''}
            onChange={(e)=>setNewFavorite(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenFormDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={enterCity} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapDispatchToProps = {
  changeFavoriteCity,
  addModeOff,
  changeModeOff,
  addFavoriteCity,
}

const mapStateToProps = (state) =>{
  return {
    favorites: state.favorites.favorites,
    changeMode: state.favorites.changeMode,
    addMode: state.favorites.addMode,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)
