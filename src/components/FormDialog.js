import React, {useCallback, useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {useDispatch, useSelector} from 'react-redux'
import {
  changeFavoriteCity,
  openCityFavorite,
  openCityNotFavorite
} from '../redux/actions'

const FormDialog = (props) => {
  const [newFavorite, setNewFavorite] = useState('')
  const dispatch = useDispatch()
  const {open, idCardFavorite, setOpenFormDialog} = props
  const favorites = useSelector((state) => state.favorites.favorites)
  const city = useSelector((state) => state.weather.weather.city)

  const enterCity = useCallback(() => {
    let transformNewFavorite = newFavorite.toLowerCase()
    dispatch(changeFavoriteCity(idCardFavorite, transformNewFavorite))
    if (city !== 'Missing' && favorites.find((value) => value === city))
      dispatch(openCityFavorite())
    else dispatch(openCityNotFavorite())
    setOpenFormDialog(false)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCardFavorite, setOpenFormDialog, newFavorite, city, favorites])

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpenFormDialog(false)}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Favorite City</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the name of the city</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            defaultValue={favorites[idCardFavorite]}
            onChange={(e) => setNewFavorite(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFormDialog(false)} color='primary'>
            Cancel
          </Button>
          <Button onClick={enterCity} color='primary'>
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormDialog
