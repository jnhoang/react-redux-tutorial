import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { fetchUser }   from "./actions/userActions"
import { fetchTweets } from "./actions/tweetsActions"
import Users           from './components/Users'


class Layout extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUser());

   }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const {user} = this.props;

    return (
      <div>
        <Users users={user} />
      </div>
    )
  }
};


function mapStateToProps(state){
  return {
    user          : state.user.user,
    userFetched   : state.user.fetched,
    tweets        : state.tweets.tweets,
  };
}

export default connect(mapStateToProps)(Layout);
