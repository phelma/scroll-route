import React from 'react'
import { withRouter, Route } from 'react-router-dom'

const scrollToTop = () => {
  try {
    window.scrollTo(0,0)
  } catch(e){}
}

class ScrollRouteComponent extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      scrollToTop()
    }
  }
  componentDidMount() {
    scrollToTop()
  }
  render() {
    return <Route {...this.props} />
  }
}

export const ScrollRoute = withRouter(ScrollRouteComponent)
