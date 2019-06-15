import React from 'react'
import { Typography, Fab } from '@material-ui/core'
import PlayIcon from '@material-ui/icons/PlayCircleOutlineRounded'

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textTransform: 'capitalize',
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
}))

const ButtonRunSimulation = () => {
  const classes = useStyle()
  const runSimulation = () => console.log('aqui')

  return (
    <Fab
      onClick={runSimulation}
      variant="extended"
      size="small"
      aria-label="run"
      className={classes.margin}
    >
      <Typography fontWeight="fontWeightLight" fontSize={8} className={classes.title}>
        run
      </Typography>
      <PlayIcon className={classes.extendedIcon} />
    </Fab>
  )
}

export default ButtonRunSimulation
