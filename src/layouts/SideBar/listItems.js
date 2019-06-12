import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '../../common/Menu'

export const mainListItems = (
  <div>
    {Menu().map(item => (
      <ListItem key={`${item.name}`} button>
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItem>
    ))}
  </div>
)
