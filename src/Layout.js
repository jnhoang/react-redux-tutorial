import React, { Component }   from "react"
// import { bindActionCreators } from 'redux'
import { connect }            from "react-redux"

// user modules
import { fetchUser }   from "./actions/userActions"
import { fetchTweets } from "./actions/tweetsActions"
import Users           from './components/Users'


class Layout extends Component {
  // state = {}
  
  componentDidMount = () => {
    // fetchUser();
    // const userList = await this.props.users.users;
    // this.setState({user: userList})

    this.props.dispatch(fetchUser());
   }

  async fetchUser() {
    this.props.dispatch(fetchUser());
  }

  // fetchTweets = () => {
  //   this.props.dispatch(fetchTweets())
  // }
  
  render = () => {
    const { user } = this.props;
    const{ fetching, fetched, users } = user
    console.log(user)
    // return (
    //   <div>
    //     <Users users={this.state.userList} />
    //   </div>
    // )
    
    if (fetching) {
      return <div>Loading...</div>
    }
    else if (fetched) {
      return (
        <div>
          <Users users={users} />
        </div>
      )
    }
    else { return <div>Why is this needed</div> }
  }
};


function mapStateToProps(state){
  return {
    user          : state.user,
    tweets        : state.tweets.tweets,
  };
}

export default connect(mapStateToProps)(Layout);
