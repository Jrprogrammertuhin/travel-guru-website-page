import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import fb from '../image/Icon/fb.png';
import google from '../image/Icon/google.png';
import '../Login/Login.css';
function Login(props) {
  console.log(props.loggedInUser.name)
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="hero">
        <div className="from-box">
          <form onSubmit={handleSubmit} className="input-group">
            <label htmlFor="newUser">if you don't have account please</label>
            <Link onClick={() => setNewUser(!newUser)} name="newUser">Sign up</Link>

            {newUser && <input name="name" type="text" onBlur={handleBlur} className="input-field" placeholder="Your name" />}
            <br />
            <input type="text" name="email" onBlur={handleBlur} className="input-field" placeholder="Your Email address" required />
            <br />
            <input type="password" name="password" onBlur={handleBlur} className="input-field" placeholder="Your Password" required />
            <br />
            <input type="checkbox" className="checkbox" /><span >I agree this terms
					Condition</span>
            <input type="submit" className="submit-btn" value={newUser ? 'Sign up' : 'Sign in'} />
          </form>
          <p style={{ color: 'red' }}>{user.error}</p>
          {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
          <div className="google">
            {/* <img src={fb} alt="" /> */}
            {user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
              <button onClick={googleSignIn} className="faceBookGoogle" >Continue with Google</button>
            }
            <br />

            {/* <img src={google} alt="" /> */}
            <button onClick={fbSignIn} className="faceBookGoogle">Continue with Facebook </button>
          </div>
          {
            user.isSignedIn && <div>
              <p>Welcome, {user.name}!</p>
              <p>Your email: {user.email}</p>
              <img src={user.photo} alt="" />
            </div>
          }
      </div>
    </div>

  );
}

export default Login;
