import React, { useContext } from 'react'
import clsx from 'clsx'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import { MyContext } from 'common/ConfigProvider'
import { mainListItems } from './listItems'
import style from './style'

const SideBar = () => {
  const stateMenu = useContext(MyContext)
  const classes = style()
  const { open, setOpen } = stateMenu
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  )
}

export default SideBar
