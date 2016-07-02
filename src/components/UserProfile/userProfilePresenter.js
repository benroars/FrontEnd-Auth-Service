import React, { Component } from 'react';
import HealthBar from '../HealthBar/healthIndex';
import ProfilePic from '../ProfilePic/picIndex';
import XPbar from '../XPbar/xpIndex';
import * as actions from '../../actions/index';
import * as xpTypes from '../../constants/expTypes';

class UserProfile extends Component {

  componentWillMount() {
    this.props.loadData(this.props.params.id);
  }

  render() {
    const total = 'XP_LEVEL_' + this.props.loadedUserinfo.level;
    let button = '';

    // if (JSON.parse(this.props.user.following).indexOf(this.props.loadedUserinfo.id) !== -1) {
    //   button = <button id='unfollow' className='btn btn-danger'>Unfollow</button>;
    // } else {
    //   button = 
    // }
    
    return (
      <div>
        <h1>{this.props.loadedUserinfo.username}</h1>
        <HealthBar type={'loaded'}/>
        <ProfilePic />
        <button id='unfollow' className='hidden btn btn-danger'>Unfollow</button>
        <button id='follow' className='btn btn-success' onClick={() => this.props.addFriend(this.props.loadedUserinfo, this.props.user)}>Follow<span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></button>
        <h2>XP: ({this.props.loadedUserinfo.totalXp} / {xpTypes[total]})</h2>
      </div>
    );
  }

}

export default UserProfile;