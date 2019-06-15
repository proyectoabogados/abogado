import React from 'react'
import { Avatar } from '@material-ui/core'
import AccessTime from '@material-ui/icons/AccessTime'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const useStyle = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
    backgroundColor: 'white',
    color: 'black',
  },
  avatar: {
    backgroundColor: 'black',
  },
}))

const LabelTimeSimulation = () => {
  const classes = useStyle()
  return (
    <Chip
      size="small"
      color="secondary"
      avatar={
        <Avatar className={classes.avatar}>
          <AccessTime />
        </Avatar>
      }
      label="100 hours"
      className={classes.chip}
    />
  )
}

export default LabelTimeSimulation
