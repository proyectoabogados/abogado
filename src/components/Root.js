import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'
import ScrollToTop from 'components/ScrollToTop'
import { UserLayout } from 'layouts'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          <ScrollToTop>
            <Route path="/" component={UserLayout} />
          </ScrollToTop>
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
