import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const UserRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

// const mapStateToProps = (state) => ({
//   authenticated: state.user.authenticated
// });

// UserRoute.propTypes = {
//   user: PropTypes.object
// };

export default UserRoute;