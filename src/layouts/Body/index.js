import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Menu from 'common/Menu'
import style from './style'

const BodyWithStyle = ({ url }) => {
  console.log(url)
  const classes = style()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            {Menu().map(item => (
              <Route key={`${item}`} path={`${url}${item.path}`} component={item.component} />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

class Body extends React.Component {
  render() {
    const { match } = this.props
    const { url } = match
    return <BodyWithStyle url={url} />
  }
}

export default withRouter(Body)
