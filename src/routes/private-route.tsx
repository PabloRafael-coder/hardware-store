import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('hardware:user')

  if (!user) {
    return <Redirect to="/login" />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />
  }
  return (
    <>
      {!isAdmin && <Header />}
      <Route {...rest} component={component} />
    </>
  )
}
export default PrivateRoute
