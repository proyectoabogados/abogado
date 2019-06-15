import React, { useContext } from 'react'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { MyContext } from 'common/ConfigProvider'
import ButtonRunSimulation from 'components/ButtonRunSimulation'
import LabelTimeSimulation from 'components/LabelTimeSimulation'

import style from './style'

const Header = () => {
  const stateMenu = useContext(MyContext)
  const classes = style()
  const { open, setOpen } = stateMenu
  const handleDrawerOpen = () => {
    setOpen()
  }

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
        </Typography>
        <LabelTimeSimulation />
        <ButtonRunSimulation />
      </Toolbar>
    </AppBar>
  )
}

export default Header
