import React, { useState } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create';
import FormDialog from './FormDialog'
import usePull from '../Helpers/usePullContext'
import ModalAnswer from './ModalAnswer'

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
  const {searchCity, searchWeather} = usePull()
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [newFavorite, setNewFavorite] = useState('new')

  const [openModal, setOpenModal] = React.useState(false)

  const favoriteChange = () =>{
    let coord = searchCity(newFavorite)
    if (coord) {
      let temp = props.favoritesCity
      temp[props.id].content = newFavorite
      props.setFavoritesCity(temp)
    }
    else handleModalOpen()
    handleClose()
  }

  const handleModalOpen = () =>setOpenModal(true)
  const handleModalClose = () => setOpenModal(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const openWetherFavorite = () =>{
    if (props.favoritesCity[props.id].content == '+')
      handleClickOpen()
    else searchWeather(props.favoritesCity[props.id].content)
  }

  return (
    <Card className={classes.root}>
      <ModalAnswer
        handleModalClose={handleModalClose}
        openModal={openModal}
      />
      <FormDialog
        favoriteChange={favoriteChange}
        handleClose={handleClose}
        open={open}
        setNewFavorite={setNewFavorite}
      />
      <CardActions>
        <Button
          onClick={()=>openWetherFavorite()}
          className={classes.buttonFavorites}
          variant="contained"
          color="primary"
        >
          {props.value.content}
        </Button>
        {
          props.value.content != '+' &&
          <CreateIcon onClick={()=>handleClickOpen()}
            className={classes.iconCard}/>
        }
      </CardActions>
    </Card>
  )
}

export default CardFavorites
