import React from "react";
import {
  AuthenticationContainer,
  Ul,
  Li,
  Input,
  Title,
  Button,
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
  const { registerNewUser } = useContext(UserContext);

  const onSubmit = () => {
    if (confirmPass === password) {
      registerNewUser({ UserName: name, Email: email, Password: password });
    } else {
      console.log("U cant write");
    }
  };

  return (
    <AuthenticationContainer authenticationSize={authenticationSize}>
      <Ul>
        <Title>Create account</Title>
        <Li>
          <label>
            Your name
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
          <Button onClick={onSubmit}>Creat your bDMI account</Button>
        </Li>
      </Ul>
    </AuthenticationContainer>
  );
}

export default Authentication;
