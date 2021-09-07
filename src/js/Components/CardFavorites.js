import React, {useCallback, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import FormDialog from './FormDialog'
import {connect} from 'react-redux'
import {addModeOn, changeModeOn, deleteFavoriteCity, fetchWeather} from '../Redux/actions'

const useStyles = makeStyles((theme) =>({
  root: {
    margin: 5,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 200,
      marginRight: 10,
      marginTop: 5,
    },
  },
  buttonFavorites: {
    width: 200,
    [theme.breakpoints.up('md')]: {
      fontSize: 8,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 12,
      width: 120,
    },
  },
  iconCard: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const CardFavorites = (props) => {
  const classes = useStyles()
  const [openFormDialog, setOpenFormDialog] = useState(false)

  const {
    favorites,
    value,
    id,
    addModeOn,
    changeModeOn,
    deleteFavoriteCity,
    fetchWeather,
  } = props

  const favoriteOpenAddCity = useCallback(
      () => {
        if (value.content == '+') {
          addModeOn()
          setOpenFormDialog(true)
        } else fetchWeather(value.content)
      },
      [addModeOn, fetchWeather, value],
  )

  const favoriteChangeCity = useCallback(
      () => {
        changeModeOn()
        setOpenFormDialog(true)
      },
      [changeModeOn],
  )


  const favoriteDeleteCity = useCallback(
      () => deleteFavoriteCity(favorites, id),
      [deleteFavoriteCity, id, favorites],
  )

  return (
    <Card className={classes.root}>
      <FormDialog
        open={openFormDialog}
        idCardFavorite={id}
        setOpenFormDialog={setOpenFormDialog}
      />
      <CardActions>
        <Button
          onClick={()=>favoriteOpenAddCity()}
          className={classes.buttonFavorites}
          variant="contained"
          color="primary"
        >
          {value.content}
        </Button>
        {
          value.content != '+' &&
          <>
            <CreateIcon onClick={favoriteChangeCity}
              className={classes.iconCard}/>
            <DeleteIcon onClick={favoriteDeleteCity}/>
          </>
        }
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = {
  addModeOn,
  changeModeOn,
  deleteFavoriteCity,
  fetchWeather,
}

const mapStateToProps = (state) =>{
  return {
    favorites: state.favorites.favorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardFavorites)
