import React from 'react';
import { connect } from 'react-redux';

import { FriendsList } from '../components';
import { fetchFriends } from '../actions';
import CreateFriendForm from '../components/CreateFriendForm';

class FriendsListView extends React.Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.isFetching) {
      console.log('fetching');
      return <div className='loader'>Loading...</div>;
    }
    console.log(this.props);

    return (
      <div className='FriendsList_wrapper'>
        <CreateFriendForm />
        <FriendsList friends={this.props.friends} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.isFetching
  }
}

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsListView);