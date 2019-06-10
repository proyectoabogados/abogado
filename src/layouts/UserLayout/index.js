import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ConfigProvider } from 'common/ConfigProvider'
import Header from '../Header'
import SideBar from '../SideBar'
import Body from '../Body'
import { userLayoutStyle } from './style'

const UserLoyout = () => {
  const classes = userLayoutStyle()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ConfigProvider>
        <Header />
        <SideBar />
      </ConfigProvider>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Body />
      </main>
    </div>
  )
}

export default UserLoyout
