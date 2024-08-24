import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { auth } from "./Firebase"
import { Container } from "react-bootstrap";
import {
    createUserWithEmailAndPassword,
  } from "firebase/auth";
import {useDispatch} from "react-redux";
import { updateUserInfo } from "../actions/actions";
import { Link } from 'react-router-dom';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
 

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);

      const response = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      const email = response.user.email
      const uid = response.user.uid
      dispatch(updateUserInfo({
        "userEmail":email,
        "uid": uid
      }))
      
    } catch (err) {
      console.log(err);
      setError("Sign in failed");
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <Card style={{ background:"#f5f5f5", color:"#2c2c2c"}}>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} required
                  />
                </Form.Group>
                <Form.Group>
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-2" style={{background:"#0056b3"}} type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2 text-white">
            Already have an account?  <Link to="/login">Sign In</Link>
          </div>
          
        </div>
      </Container>
    </>
  );
}

