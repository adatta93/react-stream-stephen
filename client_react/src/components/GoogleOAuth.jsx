import React from 'react';
import { connect } from 'react-redux';
import { signInUser, signOutUser } from '../redux/auth.action';

class GoogleOAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '126509492341-f2qua1lur1uao699l1icm1103qod89fk.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      }).catch(() => {
        console.log('GAPI not loaded');
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut(this.auth.currentUser.get().getId());
    }
  }

  render() {
    return (
      <div>
        {this.auth ? (this.props.isSignedIn ?
          (
            <button className='ui black button' onClick={() => this.auth.signOut()}>
              <i className='google icon' />Sign Out
            </button>
          ) :
          (
            <button className='ui black button' onClick={() => this.auth.signIn()}>
              <i className='google icon' />Sign In with Google
            </button>
          )) : <div>Google loading</div>
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userId) => dispatch(signInUser(userId)),
    signOut: (userId) => dispatch(signOutUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleOAuth);