import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '../../common/Menu'

const style = { textDecoration: 'none', color: 'black' }

export const mainListItems = (
  <div>
    {Menu().map(item => (
      <Link style={style} key={`${item.name}-link`} to={item.path}>
        <ListItem key={`${item.name}-item`} button>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      </Link>
    ))}
  </div>
)
