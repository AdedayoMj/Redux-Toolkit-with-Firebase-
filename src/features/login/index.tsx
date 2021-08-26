import React from 'react';
import { useDispatch } from 'react-redux';
/* import { auth, provider } from '../firebase'; */
import { Button } from 'reactstrap';
import AuthContainer from '../authcontainer';
import './login.module.css';
import { signInUser } from '../../slices/userSlice';
import { RouteComponentProps } from 'react-router-dom';
import IPageProps from '../../types';
// import logo from '../images/1280px-Discord_logo.svg.png';

const Login: React.FunctionComponent<IPageProps & RouteComponentProps<any>> = (props) => {
    const dispatch = useDispatch();
    const handleSignIn = () => {
        /* auth.signInWithPopup(provider).catch((error) => alert(error.message)); */
        dispatch(signInUser());
    };

    return (
        <AuthContainer header="Login">
            <Button
                block
                // disabled={authenticating}
                onClick={() => handleSignIn()}
                style={{ backgroundColor: '#ea4335', borderColor: '#ea4335' }}
            >
                <i className="fab fa-google mr-2"></i> Sign in with Google
            </Button>
            {/* <div className="login__logo">
                <h1>a very, very Fake Discord</h1> */}
            {/* <img src={logo} alt='discord' /> */}
            {/*  <div className='login__buttonWrapper'>
          <Button onClick={handleSignIn}>Sign in with Google</Button>
        </div> */}
            {/* <div className="login__buttonWrapper">
                    <div tabIndex={0} role="button" onClick={handleSignIn} onKeyDown={handleSignIn} className="google-btn ">
                        <div className="google-icon-wrapper">
                            <img alt="google" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
            </div>
        </div> */}
        </AuthContainer>
    );
};
export default Login;
