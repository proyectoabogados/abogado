import React, { Component, createContext } from 'react'

const MyContext = createContext()

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends Component {
  state = {
    open: true,
    setOpen: () => {
      const { open } = this.state
      const setTo = !open
      this.setState({ open: setTo })
    },
  }

  render() {
    const { children } = this.props
    return <MyContext.Provider value={{ ...this.state }}>{children}</MyContext.Provider>
  }
}

export { ConfigProvider, MyContext }

// I make this default since it will probably be exported most often.
export default MyContext.Consumer
