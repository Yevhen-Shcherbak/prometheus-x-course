import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/esm/Image';

import SignedInContext from '../../Context/SignedInContext';

function SignIn() {

  const [inputDecoration, setInputDecoration] = useState('');
  const [signInButtonState, setSignInButtonState] = useState('disabled');
  const [infoTextState, setInfoTextState] = useState('text-muted');
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useContext(SignedInContext);
 
  const handleLogin = () => {
    const user = document.getElementById('loginInput').value;
    window.localStorage.setItem('currentUser', user);
    setSignedIn(true);
    navigate('/books', { replace: true });
  }

  const decorateInput = () => {
    const userInputValue = document.getElementById('loginInput').value;
  
    if (userInputValue.length > 3 && userInputValue.length < 16) {
      setInputDecoration('is-valid');
      setSignInButtonState('');
      setInfoTextState('text-success');
    } else {
      setInputDecoration('is-invalid');
      setSignInButtonState('disabled');
      setInfoTextState('text-danger');
    }
  }

  return (
    <div className='form-wrapper text-center m-3'>
      <Form 
        noValidate 
        onSubmit={ handleLogin } 
        className='sign-in-form'
      >
        <div className="sign-in-avatar mb-3">
          <Image 
            className = 'p-1 avatar-large' 
            src= {require ('../../assets/avatar.png')}  
            fluid alt="avatar" 
            width={'240px'}
            roundedCircle
          />
        </div>
          <Form.Group>
            <Form.Label className='h4'>Username</Form.Label>
            <Form.Control 
              className= {inputDecoration}
              type="text"
              placeholder="type Username"
              id='loginInput'
              size="lg"
              onChange={decorateInput}
            />
            <Form.Text className={infoTextState} id='infoText'>
              please enter 4 to 16 characters
            </Form.Text>
          </Form.Group>
          <Button 
            type="submit" 
            className= {`my-2 w-100 ${signInButtonState}`}
          >
            Sign-in
          </Button>
      </Form>
    </div>
  );
}

export default SignIn;













