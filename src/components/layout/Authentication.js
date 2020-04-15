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

function Authentication() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const { authenticationSize } = useContext(LayoutContext);
  const { registerNewUser, signInUser, drawerType, setDrawerType } = useContext(
    UserContext
  );

  const registration = () => {
    if (confirmPass === password) {
      registerNewUser({ UserName: name, Email: email, Password: password });
    } else {
      console.log("U cant write");
    }
  };

  const signIn = () => {
    signInUser({ UserName: name, Password: password });
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
            Email
            <br />
            <Input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />
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
          <Button onClick={registration}>Creat your bDMI account</Button>
        </Li>
        <P>
          Already have an account?
          <PLink onClick={changeToSignIn}>Sign in</PLink>
        </P>
      </Ul>
    </AuthenticationContainer>
  );

  const signInTemplate = (
    <AuthenticationContainer authenticationSize={authenticationSize}>
      <Ul>
        <Title>Sign-In</Title>
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
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </Li>
        <Li>
          <Button onClick={signIn}>Sign-In</Button>
        </Li>
        <P>
          New to bDMI?
          <PLink onClick={changeToRegister}>Create account</PLink>
        </P>
      </Ul>
    </AuthenticationContainer>
  );

  return drawerType === "SignIn" ? signInTemplate : regTemplate;
}

export default Authentication;
