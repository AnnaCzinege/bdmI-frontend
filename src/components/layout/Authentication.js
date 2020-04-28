import React from "react";
import {
  AuthenticationContainer,
  Ul,
  Li,
  Input,
  Title,
  Button,
  P,
  PLink,
} from "../elements/AuthenticationElements";
import { useContext, useState } from "react";
import { LayoutContext } from "../contexts/LayoutContext";
import { UserContext } from "../contexts/UserContext";
import { message } from "antd";

function Authentication() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const {
    authenticationSize,
    setAuthenticationSize,
    setBackdropStatus,
  } = useContext(LayoutContext);
  const { registerNewUser, logInUser, drawerType, setDrawerType } = useContext(
    UserContext
  );

  const registration = () => {
    if (confirmPass === password) {
      registerNewUser({ UserName: name, Email: email, Password: password });
    } else {
      message.warning("Passwords must match!", 5);
    }
    setAuthenticationSize("-100%");
    setBackdropStatus("none");
  };

  const signIn = () => {
    logInUser({ UserName: name, Password: password });
    setAuthenticationSize("-100%");
    setBackdropStatus("none");
  };
  
  const changeToSignIn = () => {
    setDrawerType("SignIn");
  };

  const changeToRegister = () => {
    setDrawerType("Register");
  };

  const regTemplate = (
    <AuthenticationContainer authenticationSize={authenticationSize}>
      <Ul>
        <Title>Create account</Title>
        <form>
          <Li>
            <label>
              Username
              <br />
              <Input
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </label>
          </Li>
          <Li>
            <label>
              Password
              <br />
              <Input
                type="password"
                name="pass"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </Li>
          <Li>
            <label>
              Confirm password
              <br />
              <Input
                type="password"
                onChange={(event) => setConfirmPass(event.target.value)}
              />
            </label>
          </Li>
          <Li>
            <label>
              Email
              <br />
              <Input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </Li>
          <Li>
            <Button type="reset" onClick={registration}>
              Creat your bDMI account
            </Button>
          </Li>
        </form>
        <P>Already have an account?</P>
        <PLink onClick={changeToSignIn}>Sign in</PLink>
      </Ul>
    </AuthenticationContainer>
  );

  const signInTemplate = (
    <AuthenticationContainer authenticationSize={authenticationSize}>
      <Ul>
        <Title>Sign-In</Title>
        <form>
          <Li>
            <label>
              Username
              <br />
              <Input onChange={(event) => setName(event.target.value)} />
            </label>
          </Li>
          <Li>
            <label>
              Password
              <br />
              <Input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </Li>
          <Li>
            <Button type="reset" onClick={signIn}>
              Sign-In
            </Button>
          </Li>
        </form>
        <P>New to bDMI?</P>
        <PLink onClick={changeToRegister}>Create account</PLink>
      </Ul>
    </AuthenticationContainer>
  );

  return drawerType === "SignIn" ? signInTemplate : regTemplate;
}

export default Authentication;
