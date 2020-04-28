import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 2px 0px 5px black;
  background: #1a1a1a;
  color: orange;
  overflow: hidden;
  height: 500px;
  transform: ${(props) => `translateY(${props.authenticationSize})`};
  font-family: Montserrat-Medium;
  font-size: 20px;
  z-index: 3;
  -webkit-transition: all 0.7s ease;
  -moz-transition: all 0.7s ease;
  -ms-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  transition: all 0.7s ease;
`;

export const Ul = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  transform: translateX(-3%);
  text-align: center;
`;

export const Li = styled.li`
  margin: 8px 0;
`;

export const Input = styled.input`
  color: white;
  background-color: #1a1a1a;
  border: solid black 2px;
  border-radius: 5px;
  &:focus {
    outline-color: orange;
  }
`;

export const Title = styled.li`
  font-size: 32px;
  margin-left: -200px;
  transform: translateX(100px);
  border-bottom: solid orange 1px;
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: orange;
  color: black;
  border: solid orange 1px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: solid black 3px;
  }
  &:focus {
    outline: none;
  }
`;

export const P = styled.p`
  font-size: 12px;
  color: white;
`;

export const PLink = styled.p`
  color: orange;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const InputInfo = styled.p`
  font-size: 8px;
  font-style: italic;
  &:hover {
    color: white;
  }
`;
